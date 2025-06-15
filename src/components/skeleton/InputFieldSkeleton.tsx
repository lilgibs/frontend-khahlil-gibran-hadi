import React from 'react'

interface IProps {
  isLoading?: boolean
  message?: string
}

export default function InputFieldSkeleton({ isLoading, message }: IProps) {

  return (
    <div className={`px-4 relative h-[42px] w-full bg-gray-300 rounded-lg ${isLoading ? 'animate-pulse' : ''}`}>
      {!isLoading && message && (
        <p className="absolute top-1/2 transform -translate-y-1/2 text-sm italic text-neutral-600">
          {message}
        </p>
      )}
    </div>
  )
}
