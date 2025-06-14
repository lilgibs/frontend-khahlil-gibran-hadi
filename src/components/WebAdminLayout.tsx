'use client'

import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar';

export default function WebAdminLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='flex flex-row'>
      <Sidebar isOpen={isOpen} />
      <div className={`relative flex flex-col flex-1 transition-all duration-300 ease-in-out`}>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className='p-4 lg:p-6'>
          {children}
        </main>
      </div>

    </div>
  )
}
