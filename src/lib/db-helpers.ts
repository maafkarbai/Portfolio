import { prisma } from './prisma'

export async function createUserIfNotExists(email: string, name?: string) {
  return await prisma.user.upsert({
    where: { email },
    update: { name },
    create: { email, name }
  })
}

export async function getUserTenants(userId: string) {
  return await prisma.tenant.findMany({
    where: {
      memberships: {
        some: {
          userId
        }
      }
    },
    include: {
      memberships: {
        where: {
          userId
        },
        select: {
          role: true
        }
      }
    }
  })
}

export async function getUserMembership(userId: string, tenantId: string) {
  return await prisma.membership.findUnique({
    where: {
      userId_tenantId: {
        userId,
        tenantId
      }
    },
    include: {
      tenant: true,
      user: true
    }
  })
}

export async function isUserTenantOwner(userId: string, tenantId: string): Promise<boolean> {
  const membership = await prisma.membership.findUnique({
    where: {
      userId_tenantId: {
        userId,
        tenantId
      }
    }
  })
  
  return membership?.role === 'owner'
}

export async function isUserTenantAdmin(userId: string, tenantId: string): Promise<boolean> {
  const membership = await prisma.membership.findUnique({
    where: {
      userId_tenantId: {
        userId,
        tenantId
      }
    }
  })
  
  return membership?.role === 'owner' || membership?.role === 'admin'
}

export async function getTenantStats(tenantId: string) {
  const [contacts, deals, projects, notes, members] = await Promise.all([
    prisma.contact.count({ where: { tenantId } }),
    prisma.deal.count({ where: { tenantId } }),
    prisma.project.count({ where: { tenantId } }),
    prisma.note.count({ where: { tenantId } }),
    prisma.membership.count({ where: { tenantId } })
  ])
  
  return {
    contacts,
    deals,
    projects,
    notes,
    members
  }
}

export async function getDealsByStage(tenantId: string) {
  const deals = await prisma.deal.groupBy({
    by: ['stage'],
    where: { tenantId },
    _count: {
      stage: true
    },
    _sum: {
      value: true
    }
  })
  
  return deals.map(deal => ({
    stage: deal.stage,
    count: deal._count.stage,
    totalValue: deal._sum.value || 0
  }))
}