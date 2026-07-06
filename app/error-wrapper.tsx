"use client"

import React, { useState } from "react"
import { unstable_catchError, type ErrorInfo } from "next/error"

interface WrapperProps {
  children: React.ReactNode
}

const ErrorsSimulator = ({
  message = "An error occurred",
}:{
  message: string
}) => {
  const [error, setError] = useState(false)

  if(error) {
    throw new Error(message)
  }
  
  return(
    <button
      title="Simulate an error"
      className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold"
      onClick={()=>setError(true)}
    >
      Simulate Error
    </button>
  )
}

const ErrorFallback = (_props: object, { error, reset }: ErrorInfo) => {
  return (
    <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-900">
      <h2 className="font-semibold">Something went wrong</h2>
      <p className="mt-1 text-sm">{error.message}</p>
      <button
        type="button"
        title="Reset error boundary"
        className="mt-3 rounded bg-red-950 px-3 py-1 text-sm font-semibold text-red-100"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}

const ErrorBoundary = unstable_catchError(ErrorFallback)

export const ErrorWrapper = ({children}: WrapperProps) => {
  return(
    <ErrorBoundary>
      <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
        <div className="absolute top-0 left-4 -translate-y-1/2">
          <ErrorsSimulator message="Simulated error in root layout" />
        </div>
        {children}
      </div>
    </ErrorBoundary>
  )
}
