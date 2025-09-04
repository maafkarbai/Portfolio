import { getServerSession } from 'next-auth'
import { authOptions } from './auth'
import { prisma } from './prisma'
import { unauthorizedResponse, forbiddenResponse } from './api-response'

export async function requireAuth() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return { error: unauthorizedResponse() }
  }
  
  return { user: session.user }
}

export async function requireTenantAccess(tenantId: string) {
  const authResult = await requireAuth()
  
  if (authResult.error) {
    return authResult
  }
  
  const membership = await prisma.membership.findUnique({
    where: {
      userId_tenantId: {
        userId: authResult.user.id,
        tenantId: tenantId
      }
    },
    include: {
      tenant: true
    }
  })
  
  if (!membership) {
    return { error: forbiddenResponse() }
  }
  
  return {
    user: authResult.user,
    tenant: membership.tenant,
    membership
  }
}

export async function requireTenantRole(tenantId: string, allowedRoles: string[]) {
  const accessResult = await requireTenantAccess(tenantId)
  
  if (accessResult.error) {
    return accessResult
  }
  
  if (!allowedRoles.includes(accessResult.membership.role)) {
    return { error: forbiddenResponse() }
  }
  
  return accessResult
}

export function withErrorHandling<T extends any[], R>(
  handler: (...args: T) => Promise<R>
) {
  return async (...args: T): Promise<R> => {
    try {
      return await handler(...args)
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }
}