import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTenantAccess, withErrorHandling } from '@/lib/middleware'
import { successResponse, validationErrorResponse, notFoundResponse, internalServerErrorResponse } from '@/lib/api-response'
import { updateContactSchema } from '@/lib/validation'

interface RouteParams {
  params: { tenantId: string; contactId: string }
}

export const GET = withErrorHandling(async (request: NextRequest, { params }: RouteParams) => {
  const accessResult = await requireTenantAccess(params.tenantId)
  if (accessResult.error) return accessResult.error
  
  try {
    const contact = await prisma.contact.findFirst({
      where: {
        id: params.contactId,
        tenantId: params.tenantId
      },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        deals: {
          include: {
            owner: {
              select: {
                id: true,
                name: true,
                email: true
              }
            }
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
    
    if (!contact) {
      return notFoundResponse('Contact')
    }
    
    return successResponse(contact)
  } catch (error) {
    return internalServerErrorResponse()
  }
})

export const PATCH = withErrorHandling(async (request: NextRequest, { params }: RouteParams) => {
  const accessResult = await requireTenantAccess(params.tenantId)
  if (accessResult.error) return accessResult.error
  
  try {
    const body = await request.json()
    const validation = updateContactSchema.safeParse(body)
    
    if (!validation.success) {
      return validationErrorResponse(validation.error.issues)
    }
    
    const contact = await prisma.contact.updateMany({
      where: {
        id: params.contactId,
        tenantId: params.tenantId
      },
      data: validation.data
    })
    
    if (contact.count === 0) {
      return notFoundResponse('Contact')
    }
    
    const updatedContact = await prisma.contact.findUnique({
      where: { id: params.contactId },
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
    
    return successResponse(updatedContact, 'Contact updated successfully')
  } catch (error) {
    return internalServerErrorResponse()
  }
})

export const DELETE = withErrorHandling(async (request: NextRequest, { params }: RouteParams) => {
  const accessResult = await requireTenantAccess(params.tenantId)
  if (accessResult.error) return accessResult.error
  
  try {
    const contact = await prisma.contact.deleteMany({
      where: {
        id: params.contactId,
        tenantId: params.tenantId
      }
    })
    
    if (contact.count === 0) {
      return notFoundResponse('Contact')
    }
    
    return successResponse(null, 'Contact deleted successfully')
  } catch (error) {
    return internalServerErrorResponse()
  }
})