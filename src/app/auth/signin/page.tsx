"use client"

import { signIn, getSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await signIn("email", { email, callbackUrl: "/dashboard" })
    } catch (error) {
      console.error("Sign in error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true)
    try {
      await signIn("google", { callbackUrl: "/dashboard" })
    } catch (error) {
      console.error("Google sign in error:", error)
    } finally {
      setIsGoogleLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 flex items-center justify-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/Logo.svg"
              alt="Techlogies"
              width={48}
              height={48}
              className="rounded-lg"
              unoptimized
            />
          </div>
          <h2 className="mt-8 text-center text-3xl font-bold text-gray-900 tracking-tight">
            Welcome back
          </h2>
          <p className="mt-3 text-center text-gray-600">
            Sign in to access your dashboard
          </p>
          <p className="mt-2 text-center text-sm text-gray-500">
            Or{" "}
            <Link href="/" className="font-medium text-[#4689ec] hover:text-[#3a7bd5] transition-colors duration-200">
              return to homepage
            </Link>
          </p>
        </div>

        <div className="mt-10 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="space-y-6">
            <div>
              <Button
                onClick={handleGoogleSignIn}
                disabled={isGoogleLoading || isLoading}
                variant="outline"
                className="group relative w-full flex justify-center items-center py-3 px-4 border-2 border-gray-200 text-sm font-semibold rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-[#4689ec] hover:text-[#4689ec] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4689ec] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGoogleLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#4689ec]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                      <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </>
                )}
              </Button>
            </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
            </div>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleEmailSignIn}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#4689ec] focus:border-[#4689ec] focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Button
                type="submit"
                disabled={isLoading || isGoogleLoading}
                className="group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-[#4689ec] hover:bg-[#3a7bd5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4689ec] shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending magic link...
                  </>
                ) : (
                  <>
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send magic link
                  </>
                )}
              </Button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}