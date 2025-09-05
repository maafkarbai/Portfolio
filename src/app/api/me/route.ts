import { requireAuth, withErrorHandling } from '@/lib/middleware'
import { successResponse, internalServerErrorResponse } from '@/lib/api-response'
import { getUserTenants } from '@/lib/db-helpers'

export const GET = withErrorHandling(async () => {
  const authResult = await requireAuth()
  if (authResult.error) return authResult.error
  
  try {
    const tenants = await getUserTenants(authResult.user.id)
    
    const userData = {
      user: authResult.user,
      tenants
    }
    
    return successResponse(userData)
  } catch (error) {
    return internalServerErrorResponse()
  }
})