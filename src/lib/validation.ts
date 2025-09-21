import { z } from 'zod'

// User schemas
export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).optional()
})

// Tenant schemas
export const createTenantSchema = z.object({
  name: z.string().min(1, 'Tenant name is required'),
  plan: z.enum(['free', 'pro', 'enterprise']).default('free')
})

export const updateTenantSchema = z.object({
  name: z.string().min(1).optional(),
  plan: z.enum(['free', 'pro', 'enterprise']).optional()
})

// Contact schemas
export const createContactSchema = z.object({
  tenantId: z.string().cuid(),
  name: z.string().min(1, 'Contact name is required'),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional(),
  company: z.string().optional(),
  ownerUserId: z.string().cuid().optional()
})

export const updateContactSchema = z.object({
  name: z.string().min(1).optional(),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional(),
  company: z.string().optional(),
  ownerUserId: z.string().cuid().optional()
})

// Deal schemas
export const createDealSchema = z.object({
  tenantId: z.string().cuid(),
  title: z.string().min(1, 'Deal title is required'),
  value: z.number().positive().optional(),
  stage: z.enum(['lead', 'qualified', 'proposal', 'won', 'lost']).default('lead'),
  contactId: z.string().cuid().optional(),
  ownerUserId: z.string().cuid().optional()
})

export const updateDealSchema = z.object({
  title: z.string().min(1).optional(),
  value: z.number().positive().optional(),
  stage: z.enum(['lead', 'qualified', 'proposal', 'won', 'lost']).optional(),
  contactId: z.string().cuid().optional(),
  ownerUserId: z.string().cuid().optional()
})

// Note schemas
export const createNoteSchema = z.object({
  tenantId: z.string().cuid(),
  content: z.string().min(1, 'Note content is required'),
  contactId: z.string().cuid().optional(),
  dealId: z.string().cuid().optional(),
  authorId: z.string().cuid()
})

export const updateNoteSchema = z.object({
  content: z.string().min(1).optional()
})

// Project schemas
export const createProjectSchema = z.object({
  tenantId: z.string().cuid(),
  name: z.string().min(1, 'Project name is required'),
  description: z.string().optional(),
  status: z.enum(['active', 'completed', 'paused']).default('active'),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional()
})

export const updateProjectSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().optional(),
  status: z.enum(['active', 'completed', 'paused']).optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional()
})

// Membership schemas
export const createMembershipSchema = z.object({
  userId: z.string().cuid(),
  tenantId: z.string().cuid(),
  role: z.enum(['owner', 'admin', 'member']).default('member')
})

export const updateMembershipSchema = z.object({
  role: z.enum(['owner', 'admin', 'member'])
})

// Query schemas
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10)
})

export const searchSchema = z.object({
  q: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('desc')
})

// Blog post schemas
export const createBlogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase letters, numbers, and hyphens only"),
  content: z.string().min(1, "Content is required"),
  excerpt: z.string().optional(),
  coverImage: z.string().url().optional().or(z.literal("")),
  published: z.boolean().default(false),
})

export const updateBlogPostSchema = z.object({
  title: z.string().min(1).optional(),
  slug: z.string().min(1).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase letters, numbers, and hyphens only").optional(),
  content: z.string().min(1).optional(),
  excerpt: z.string().optional(),
  coverImage: z.string().url().optional().or(z.literal("")),
  published: z.boolean().optional(),
})

// Blog category schemas
export const createBlogCategorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase letters, numbers, and hyphens only"),
  description: z.string().optional(),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, "Color must be a valid hex color").optional(),
})

export const updateBlogCategorySchema = z.object({
  name: z.string().min(1).optional(),
  slug: z.string().min(1).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase letters, numbers, and hyphens only").optional(),
  description: z.string().optional(),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, "Color must be a valid hex color").optional(),
})

// Blog tag schemas
export const createBlogTagSchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase letters, numbers, and hyphens only"),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, "Color must be a valid hex color").optional(),
})

export const updateBlogTagSchema = z.object({
  name: z.string().min(1).optional(),
  slug: z.string().min(1).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase letters, numbers, and hyphens only").optional(),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, "Color must be a valid hex color").optional(),
})