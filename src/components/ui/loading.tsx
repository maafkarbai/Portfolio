"use client";

import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  color?: "primary" | "secondary" | "accent" | "white";
}

export function LoadingSpinner({ 
  size = "md", 
  className,
  color = "primary" 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8",
    xl: "w-12 h-12"
  };

  const colorClasses = {
    primary: "text-[#4A90E2]",
    secondary: "text-[#2EC4B6]", 
    accent: "text-[#FF9505]",
    white: "text-white"
  };

  return (
    <div 
      className={cn(
        "animate-spin rounded-full border-2 border-current border-t-transparent",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

interface LoadingDotsProps {
  className?: string;
  color?: "primary" | "secondary" | "accent" | "white";
}

export function LoadingDots({ className, color = "primary" }: LoadingDotsProps) {
  const colorClasses = {
    primary: "bg-[#4A90E2]",
    secondary: "bg-[#2EC4B6]",
    accent: "bg-[#FF9505]", 
    white: "bg-white"
  };

  return (
    <div className={cn("flex space-x-1", className)} role="status" aria-label="Loading">
      <div 
        className={cn(
          "w-2 h-2 rounded-full animate-bounce",
          colorClasses[color]
        )}
        style={{ animationDelay: '0ms' }}
      />
      <div 
        className={cn(
          "w-2 h-2 rounded-full animate-bounce", 
          colorClasses[color]
        )}
        style={{ animationDelay: '150ms' }}
      />
      <div 
        className={cn(
          "w-2 h-2 rounded-full animate-bounce",
          colorClasses[color] 
        )}
        style={{ animationDelay: '300ms' }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

interface LoadingPulseProps {
  className?: string;
}

export function LoadingPulse({ className }: LoadingPulseProps) {
  return (
    <div className={cn("flex space-x-2", className)} role="status" aria-label="Loading">
      <div className="w-3 h-12 bg-[#4A90E2] rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="w-3 h-12 bg-[#2EC4B6] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />  
      <div className="w-3 h-12 bg-[#FF9505] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
      <div className="w-3 h-12 bg-[#4A90E2] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

interface PageLoadingProps {
  message?: string;
}

export function PageLoading({ message = "Loading..." }: PageLoadingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] rounded-2xl flex items-center justify-center text-white font-bold text-3xl animate-pulse">
              T
            </div>
            <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] rounded-2xl animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mb-6 flex justify-center">
          <LoadingPulse />
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-[#1C1C1C] mb-2">
          {message}
        </h2>
        <p className="text-gray-600 text-lg">
          Please wait while we prepare everything for you
        </p>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-[#4A90E2] to-[#2EC4B6] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ButtonLoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  loadingText?: string;
  className?: string;
}

export function ButtonLoading({ 
  isLoading, 
  children, 
  loadingText = "Loading...",
  className 
}: ButtonLoadingProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {isLoading ? (
        <>
          <LoadingSpinner size="sm" className="mr-2" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </div>
  );
}