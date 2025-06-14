import React from 'react'

export default function loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-900 border-t-transparent" />
    </div>
  )
}
