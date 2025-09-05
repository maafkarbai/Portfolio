import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth, withErrorHandling } from '@/lib/middleware'
import { successResponse, errorResponse, validationErrorResponse, internalServerErrorResponse } from '@/lib/api-response'
import { createTenantSchema } from '@/lib/validation'

export const GET = withErrorHandling(async () => {
  const authResult = await requireAuth()
  if (authResult.error) return authResult.error
  
  try {
    const tenants = await prisma.tenant.findMany({
      where: {
        memberships: {
          some: {
            userId: authResult.user.id
          }
        }
      },
      include: {
        memberships: {
          where: {
            userId: authResult.user.id
          },
          select: {
            role: true
          }
        },
        _count: {
          select: {
            memberships: true,
            contacts: true,
            deals: true,
            projects: true
          }
        }
      }
    })

    return successResponse(tenants)
  } catch (error) {
    return internalServerErrorResponse()
  }
})

export const POST = withErrorHandling(async (request: NextRequest) => {
  const authResult = await requireAuth()
  if (authResult.error) return authResult.error
  
  try {
    const body = await request.json()
    const validation = createTenantSchema.safeParse(body)
    
    if (!validation.success) {
      return validationErrorResponse(validation.error.issues)
    }
    
    const { name, plan } = validation.data
    
    // Create tenant and membership in a transaction
    const result = await prisma.$transaction(async (tx) => {
      const tenant = await tx.tenant.create({
        data: {
          name,
          plan
        }
      })
      
      await tx.membership.create({
        data: {
          userId: authResult.user.id,
          tenantId: tenant.id,
          role: 'owner'
        }
      })
      
      return tenant
    })
    
    return successResponse(result, 'Tenant created successfully')
  } catch (error) {
    return internalServerErrorResponse()
  }
})