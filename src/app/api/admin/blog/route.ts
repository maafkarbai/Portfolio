import { NextRequest } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { createBlogPostSchema } from "@/lib/validation"
import { successResponse, errorResponse, validationErrorResponse } from "@/lib/api-response"
import { isAdmin } from "@/lib/admin-auth"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id || !(await isAdmin(session.user.id))) {
      return errorResponse("Unauthorized", 401)
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "10")
    const published = searchParams.get("published")
    const search = searchParams.get("search")

    const where: any = {}
    
    if (published !== null) {
      where.published = published === "true"
    }
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { content: { contains: search, mode: "insensitive" } },
        { excerpt: { contains: search, mode: "insensitive" } },
      ]
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        include: {
          author: { select: { id: true, name: true, email: true } },
          tags: true,
          categories: true,
        },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.blogPost.count({ where }),
    ])

    return successResponse({
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return errorResponse("Internal server error")
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id || !(await isAdmin(session.user.id))) {
      return errorResponse("Unauthorized", 401)
    }

    const body = await request.json()
    const validation = createBlogPostSchema.safeParse(body)

    if (!validation.success) {
      return validationErrorResponse(validation.error.issues)
    }

    const { title, slug, content, excerpt, coverImage, published } = validation.data

    // Check if slug already exists
    const existingPost = await prisma.blogPost.findUnique({
      where: { slug }
    })

    if (existingPost) {
      return errorResponse("A post with this slug already exists", 400)
    }

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        coverImage,
        published,
        publishedAt: published ? new Date() : null,
        authorId: session.user.id,
      },
      include: {
        author: { select: { id: true, name: true, email: true } },
        tags: true,
        categories: true,
      },
    })

    return successResponse(post, 201)
  } catch (error) {
    console.error("Error creating blog post:", error)
    return errorResponse("Internal server error")
  }
}