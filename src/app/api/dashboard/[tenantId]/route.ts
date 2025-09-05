import { NextRequest } from 'next/server'
import { requireTenantAccess, withErrorHandling } from '@/lib/middleware'
import { successResponse, internalServerErrorResponse } from '@/lib/api-response'
import { getTenantStats, getDealsByStage } from '@/lib/db-helpers'

interface RouteParams {
  params: { tenantId: string }
}

export const GET = withErrorHandling(async (request: NextRequest, { params }: RouteParams) => {
  const accessResult = await requireTenantAccess(params.tenantId)
  if (accessResult.error) return accessResult.error
  
  try {
    const [stats, dealsByStage] = await Promise.all([
      getTenantStats(params.tenantId),
      getDealsByStage(params.tenantId)
    ])
    
    const dashboardData = {
      tenant: accessResult.tenant,
      stats,
      dealsByStage
    }
    
    return successResponse(dashboardData)
  } catch (error) {
    return internalServerErrorResponse()
  }
})