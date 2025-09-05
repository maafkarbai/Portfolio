import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTenantAccess, withErrorHandling } from '@/lib/middleware'
import { successResponse, validationErrorResponse, internalServerErrorResponse } from '@/lib/api-response'
import { createDealSchema, paginationSchema, searchSchema } from '@/lib/validation'

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
    const stage = searchParams.get('stage')
    
    const skip = (page - 1) * limit
    
    const where = {
      tenantId: params.tenantId,
      ...(q && {
        OR: [
          { title: { contains: q, mode: 'insensitive' as const } }
        ]
      }),
      ...(stage && { stage })
    }
    
    const orderBy = sortBy ? { [sortBy]: sortOrder } : { createdAt: 'desc' as const }
    
    const [deals, total] = await Promise.all([
      prisma.deal.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: {
          contact: {
            select: {
              id: true,
              name: true,
              email: true,
              company: true
            }
          },
          owner: {
            select: {
              id: true,
              name: true,
              email: true
            }
          },
          _count: {
            select: {
              notes: true
            }
          }
        }
      }),
      prisma.deal.count({ where })
    ])
    
    return successResponse({
      deals,
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
    const validation = createDealSchema.safeParse({
      ...body,
      tenantId: params.tenantId
    })
    
    if (!validation.success) {
      return validationErrorResponse(validation.error.issues)
    }
    
    const deal = await prisma.deal.create({
      data: validation.data,
      include: {
        contact: {
          select: {
            id: true,
            name: true,
            email: true,
            company: true
          }
        },
        owner: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })
    
    return successResponse(deal, 'Deal created successfully')
  } catch (error) {
    return internalServerErrorResponse()
  }
})