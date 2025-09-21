"use client"

import { signOut } from "next-auth/react"
import { User } from "next-auth"
import Link from "next/link"

interface AdminNavbarProps {
  user: User
}

export function AdminNavbar({ user }: AdminNavbarProps) {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/admin" className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">
                Techlogies
              </div>
              <div className="ml-3 px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                ADMIN
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              View Site
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              User Dashboard
            </Link>
            
            <div className="flex items-center space-x-3">
              <div className="text-sm">
                <span className="text-gray-500">Signed in as</span>
                <span className="ml-1 font-medium text-gray-900">{user.name || user.email}</span>
              </div>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}