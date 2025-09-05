import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTenantAccess, withErrorHandling } from '@/lib/middleware'
import { successResponse, validationErrorResponse, internalServerErrorResponse } from '@/lib/api-response'
import { createContactSchema, paginationSchema, searchSchema } from '@/lib/validation'

interface RouteParams {
  params: { tenantId: string }
}

export const GET = withErrorHandling(async (request: NextRequest, { params }: RouteParams) => {
  const accessResult = await requireTenantAccess(params.tenantId)
  if (accessResult.error) return accessResult.error
  
  try {
    const { searchParams } = new URL(request.url)
    const paginationValidation = paginationSchema.safeParse(Object.fromEntries(searchParams))
    const searchValidation = searchSchema.safeParse(Object.fromEntries(searchParams))
    
    if (!paginationValidation.success || !searchValidation.success) {
      return validationErrorResponse([
        ...(paginationValidation.error?.issues || []),
        ...(searchValidation.error?.issues || [])
      ])
    }
    
    const { page, limit } = paginationValidation.data
    const { q, sortBy, sortOrder } = searchValidation.data
    
    const skip = (page - 1) * limit
    
    const where = {
      tenantId: params.tenantId,
      ...(q && {
        OR: [
          { name: { contains: q, mode: 'insensitive' as const } },
          { email: { contains: q, mode: 'insensitive' as const } },
          { company: { contains: q, mode: 'insensitive' as const } }
        ]
      })
    }
    
    const orderBy = sortBy ? { [sortBy]: sortOrder } : { createdAt: 'desc' as const }
    
    const [contacts, total] = await Promise.all([
      prisma.contact.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true
            }
          },
          _count: {
            select: {
              deals: true,
              notes: true
            }
          }
        }
      }),
      prisma.contact.count({ where })
    ])
    
    return successResponse({
      contacts,
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
    const validation = createContactSchema.safeParse({
      ...body,
      tenantId: params.tenantId
    })
    
    if (!validation.success) {
      return validationErrorResponse(validation.error.issues)
    }
    
    const contact = await prisma.contact.create({
      data: validation.data,
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })
    
    return successResponse(contact, 'Contact created successfully')
  } catch (error) {
    return internalServerErrorResponse()
  }
})