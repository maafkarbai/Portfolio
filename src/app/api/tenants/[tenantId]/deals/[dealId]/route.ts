import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTenantAccess, withErrorHandling } from '@/lib/middleware'
import { successResponse, validationErrorResponse, notFoundResponse, internalServerErrorResponse } from '@/lib/api-response'
import { updateDealSchema } from '@/lib/validation'

interface RouteParams {
  params: { tenantId: string; dealId: string }
}

export const GET = withErrorHandling(async (request: NextRequest, { params }: RouteParams) => {
  const accessResult = await requireTenantAccess(params.tenantId)
  if (accessResult.error) return accessResult.error
  
  try {
    const deal = await prisma.deal.findFirst({
      where: {
        id: params.dealId,
        tenantId: params.tenantId
      },
      include: {
        contact: {
          select: {
            id: true,
            name: true,
            email: true,
            company: true,
            phone: true
          }
        },
        owner: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        notes: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
                email: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })
    
    if (!deal) {
      return notFoundResponse('Deal')
    }
    
    return successResponse(deal)
  } catch (error) {
    return internalServerErrorResponse()
  }
})

export const PATCH = withErrorHandling(async (request: NextRequest, { params }: RouteParams) => {
  const accessResult = await requireTenantAccess(params.tenantId)
  if (accessResult.error) return accessResult.error
  
  try {
    const body = await request.json()
    const validation = updateDealSchema.safeParse(body)
    
    if (!validation.success) {
      return validationErrorResponse(validation.error.issues)
    }
    
    const deal = await prisma.deal.updateMany({
      where: {
        id: params.dealId,
        tenantId: params.tenantId
      },
      data: validation.data
    })
    
    if (deal.count === 0) {
      return notFoundResponse('Deal')
    }
    
    const updatedDeal = await prisma.deal.findUnique({
      where: { id: params.dealId },
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
    
    return successResponse(updatedDeal, 'Deal updated successfully')
  } catch (error) {
    return internalServerErrorResponse()
  }
})

export const DELETE = withErrorHandling(async (request: NextRequest, { params }: RouteParams) => {
  const accessResult = await requireTenantAccess(params.tenantId)
  if (accessResult.error) return accessResult.error
  
  try {
    const deal = await prisma.deal.deleteMany({
      where: {
        id: params.dealId,
        tenantId: params.tenantId
      }
    })
    
    if (deal.count === 0) {
      return notFoundResponse('Deal')
    }
    
    return successResponse(null, 'Deal deleted successfully')
  } catch (error) {
    return internalServerErrorResponse()
  }
})