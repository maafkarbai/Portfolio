import { NextResponse } from 'next/server'
import { z } from 'zod'

export type ApiResponse<T = any> = {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export function successResponse<T>(data: T, message?: string): NextResponse<ApiResponse<T>> {
  return NextResponse.json({
    success: true,
    data,
    message
  })
}

export function errorResponse(error: string, status: number = 400): NextResponse<ApiResponse> {
  return NextResponse.json({
    success: false,
    error
  }, { status })
}

export function validationErrorResponse(errors: z.ZodIssue[]): NextResponse<ApiResponse> {
  const errorMessage = errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
  return NextResponse.json({
    success: false,
    error: `Validation failed: ${errorMessage}`
  }, { status: 422 })
}

export function unauthorizedResponse(): NextResponse<ApiResponse> {
  return NextResponse.json({
    success: false,
    error: 'Unauthorized'
  }, { status: 401 })
}

export function forbiddenResponse(): NextResponse<ApiResponse> {
  return NextResponse.json({
    success: false,
    error: 'Forbidden'
  }, { status: 403 })
}

export function notFoundResponse(resource: string = 'Resource'): NextResponse<ApiResponse> {
  return NextResponse.json({
    success: false,
    error: `${resource} not found`
  }, { status: 404 })
}

export function internalServerErrorResponse(): NextResponse<ApiResponse> {
  return NextResponse.json({
    success: false,
    error: 'Internal server error'
  }, { status: 500 })
}