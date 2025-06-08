
import { LayoutGrid, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

  return (
    <div className={`sticky left-0 top-0 ${isOpen ? 'w-[300px]' : 'w-[72px]'} h-screen flex flex-col transition-all duration-300 ease-in-out`}>
      <div className='h-[72px] flex items-center justify-center bg-white shadow-md'>
        <p className='font-bold text-2xl'>LIL GIBRAN</p>
      </div>
      <div className={`-z-10 flex-1 ${isOpen ? 'p-4' : 'py-4 px-2 items-center'} flex flex-col gap-4 bg-white font-semibold transition-all duration-300 ease-in-out`}>
        <p>MENU</p>
        <div className='flex flex-col gap-4'>
          <Link
            className='flex gap-4'
            href='/dashboard'
          >
            <LayoutGrid />
            <span className={`${isOpen ? 'block' : 'hidden'} overflow-hidden`}>Dashboard</span>
          </Link>
          <Link
            className='flex gap-4'
            href='/user'
          >
            <User />
            <span className={`${isOpen ? 'block' : 'hidden'} overflow-hidden`}>User</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
