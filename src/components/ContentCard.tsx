import React from 'react'

export default function ContentCard({ children }: { children: React.ReactNode }) {
  return (
    <div className='p-4 flex flex-col gap-4 w-full bg-white shadow-md rounded-lg'>
      {children}
    </div>
  )
}
