import { NextRequest } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { updateBlogPostSchema } from "@/lib/validation"
import { successResponse, errorResponse, validationErrorResponse } from "@/lib/api-response"
import { isAdmin } from "@/lib/admin-auth"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id || !(await isAdmin(session.user.id))) {
      return errorResponse("Unauthorized", 401)
    }

    const post = await prisma.blogPost.findUnique({
      where: { id: params.id },
      include: {
        author: { select: { id: true, name: true, email: true } },
        tags: true,
        categories: true,
      },
    })

    if (!post) {
      return errorResponse("Blog post not found", 404)
    }

    return successResponse(post)
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return errorResponse("Internal server error")
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id || !(await isAdmin(session.user.id))) {
      return errorResponse("Unauthorized", 401)
    }

    const body = await request.json()
    const validation = updateBlogPostSchema.safeParse(body)

    if (!validation.success) {
      return validationErrorResponse(validation.error.issues)
    }

    const existingPost = await prisma.blogPost.findUnique({
      where: { id: params.id }
    })

    if (!existingPost) {
      return errorResponse("Blog post not found", 404)
    }

    // Check if slug already exists (excluding current post)
    if (validation.data.slug && validation.data.slug !== existingPost.slug) {
      const slugExists = await prisma.blogPost.findUnique({
        where: { slug: validation.data.slug }
      })

      if (slugExists) {
        return errorResponse("A post with this slug already exists", 400)
      }
    }

    const updateData: any = { ...validation.data }

    // Update publishedAt if publishing for the first time
    if (validation.data.published && !existingPost.published) {
      updateData.publishedAt = new Date()
    } else if (validation.data.published === false && existingPost.published) {
      updateData.publishedAt = null
    }

    const post = await prisma.blogPost.update({
      where: { id: params.id },
      data: updateData,
      include: {
        author: { select: { id: true, name: true, email: true } },
        tags: true,
        categories: true,
      },
    })

    return successResponse(post)
  } catch (error) {
    console.error("Error updating blog post:", error)
    return errorResponse("Internal server error")
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id || !(await isAdmin(session.user.id))) {
      return errorResponse("Unauthorized", 401)
    }

    const post = await prisma.blogPost.findUnique({
      where: { id: params.id }
    })

    if (!post) {
      return errorResponse("Blog post not found", 404)
    }

    await prisma.blogPost.delete({
      where: { id: params.id }
    })

    return successResponse({ message: "Blog post deleted successfully" })
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return errorResponse("Internal server error")
  }
}