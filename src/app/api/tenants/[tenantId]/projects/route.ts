import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTenantAccess, withErrorHandling } from '@/lib/middleware'
import { successResponse, validationErrorResponse, internalServerErrorResponse } from '@/lib/api-response'
import { createProjectSchema, paginationSchema, searchSchema } from '@/lib/validation'

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
    const status = searchParams.get('status')
    
    const skip = (page - 1) * limit
    
    const where = {
      tenantId: params.tenantId,
      ...(q && {
        OR: [
          { name: { contains: q, mode: 'insensitive' as const } },
          { description: { contains: q, mode: 'insensitive' as const } }
        ]
      }),
      ...(status && { status })
    }
    
    const orderBy = sortBy ? { [sortBy]: sortOrder } : { createdAt: 'desc' as const }
    
    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        where,
        orderBy,
        skip,
        take: limit
      }),
      prisma.project.count({ where })
    ])
    
    return successResponse({
      projects,
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
    const validation = createProjectSchema.safeParse({
      ...body,
      tenantId: params.tenantId
    })
    
    if (!validation.success) {
      return validationErrorResponse(validation.error.issues)
    }
    
    const { startDate, endDate, ...projectData } = validation.data
    
    const project = await prisma.project.create({
      data: {
        ...projectData,
        ...(startDate && { startDate: new Date(startDate) }),
        ...(endDate && { endDate: new Date(endDate) })
      }
    })
    
    return successResponse(project, 'Project created successfully')
  } catch (error) {
    return internalServerErrorResponse()
  }
})