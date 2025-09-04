import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTenantAccess, requireTenantRole, withErrorHandling } from '@/lib/middleware'
import { successResponse, errorResponse, validationErrorResponse, notFoundResponse, internalServerErrorResponse } from '@/lib/api-response'
import { updateTenantSchema } from '@/lib/validation'

interface RouteParams {
  params: { tenantId: string }
}

export const GET = withErrorHandling(async (request: NextRequest, { params }: RouteParams) => {
  const accessResult = await requireTenantAccess(params.tenantId)
  if (accessResult.error) return accessResult.error
  
  try {
    const tenant = await prisma.tenant.findUnique({
      where: { id: params.tenantId },
      include: {
        memberships: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                image: true
              }
            }
          }
        },
        _count: {
          select: {
            contacts: true,
            deals: true,
            projects: true,
            notes: true
          }
        }
      }
    })
    
    if (!tenant) {
      return notFoundResponse('Tenant')
    }
    
    return successResponse(tenant)
  } catch (error) {
    return internalServerErrorResponse()
  }
})

export const PATCH = withErrorHandling(async (request: NextRequest, { params }: RouteParams) => {
  const roleResult = await requireTenantRole(params.tenantId, ['owner', 'admin'])
  if (roleResult.error) return roleResult.error
  
  try {
    const body = await request.json()
    const validation = updateTenantSchema.safeParse(body)
    
    if (!validation.success) {
      return validationErrorResponse(validation.error.issues)
    }
    
    const tenant = await prisma.tenant.update({
      where: { id: params.tenantId },
      data: validation.data
    })
    
    return successResponse(tenant, 'Tenant updated successfully')
  } catch (error) {
    return internalServerErrorResponse()
  }
})

export const DELETE = withErrorHandling(async (request: NextRequest, { params }: RouteParams) => {
  const roleResult = await requireTenantRole(params.tenantId, ['owner'])
  if (roleResult.error) return roleResult.error
  
  try {
    await prisma.tenant.delete({
      where: { id: params.tenantId }
    })
    
    return successResponse(null, 'Tenant deleted successfully')
  } catch (error) {
    return internalServerErrorResponse()
  }
})