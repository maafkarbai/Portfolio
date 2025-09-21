import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth"
import { prisma } from "./prisma"
import { redirect } from "next/navigation"

export async function requireAdmin() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    redirect("/auth/signin")
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id }
  })

  if (!user || user.role !== "admin") {
    redirect("/dashboard") // Redirect non-admins to regular dashboard
  }

  return { session, user }
}

export async function isAdmin(userId?: string): Promise<boolean> {
  if (!userId) return false
  
  const user = await prisma.user.findUnique({
    where: { id: userId }
  })
  
  return user?.role === "admin"
}