import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTenantAccess, withErrorHandling } from '@/lib/middleware'
import { successResponse, validationErrorResponse, internalServerErrorResponse } from '@/lib/api-response'
import { createNoteSchema, paginationSchema } from '@/lib/validation'

interface RouteParams {
  params: { tenantId: string }
}

export const GET = withErrorHandling(async (request: NextRequest, { params }: RouteParams) => {
  const accessResult = await requireTenantAccess(params.tenantId)
  if (accessResult.error) return accessResult.error
  
  try {
    const { searchParams } = new URL(request.url)
    const paginationValidation = paginationSchema.safeParse(Object.fromEntries(searchParams))
    
    if (!paginationValidation.success) {
      return validationErrorResponse(paginationValidation.error.issues)
    }
    
    const { page, limit } = paginationValidation.data
    const contactId = searchParams.get('contactId')
    const dealId = searchParams.get('dealId')
    
    const skip = (page - 1) * limit
    
    const where = {
      tenantId: params.tenantId,
      ...(contactId && { contactId }),
      ...(dealId && { dealId })
    }
    
    const [notes, total] = await Promise.all([
      prisma.note.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true
            }
          },
          contact: {
            select: {
              id: true,
              name: true,
              email: true
            }
          },
          deal: {
            select: {
              id: true,
              title: true,
              stage: true
            }
          }
        }
      }),
      prisma.note.count({ where })
    ])
    
    return successResponse({
      notes,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    return internalServerErrorResponse()
  }
})

export const POST = withErrorHandling(async (request: NextRequest, { params }: RouteParams) => {
  const accessResult = await requireTenantAccess(params.tenantId)
  if (accessResult.error) return accessResult.error
  
  try {
    const body = await request.json()
    const validation = createNoteSchema.safeParse({
      ...body,
      tenantId: params.tenantId,
      authorId: accessResult.user.id
    })
    
    if (!validation.success) {
      return validationErrorResponse(validation.error.issues)
    }
    
    const note = await prisma.note.create({
      data: validation.data,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        contact: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        deal: {
          select: {
            id: true,
            title: true,
            stage: true
          }
        }
      }
    })
    
    return successResponse(note, 'Note created successfully')
  } catch (error) {
    return internalServerErrorResponse()
  }
})