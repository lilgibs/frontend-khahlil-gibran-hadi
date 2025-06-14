
import { Flag, Package, ShoppingBag, Warehouse } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '@/assets/png/logo.png'

export default function Sidebar({ isOpen }: { isOpen: boolean }) {

  return (
    <div className={`sticky left-0 top-0 ${isOpen ? 'w-[72px] md:w-[300px]' : 'w-[72px]'} h-screen flex flex-col transition-all duration-300 ease-in-out`}>
      <div className='h-[72px] flex items-center justify-center gap-2 bg-white shadow-md'>
        <Image
          src={logo}
          alt="LIL GIBRAN Logo"
          width={42}
          height={42}
        />
        <p className={`${isOpen ? 'hidden md:block' : 'hidden'} text-nowrap overflow-hidden font-bold text-2xl`}>LIL GIBRAN</p>
      </div>
      <div className={`-z-10 flex-1 ${isOpen ? 'p-4' : 'py-4 px-2 items-center'} flex flex-col gap-4 bg-white font-semibold transition-all duration-300 ease-in-out`}>
        <p>Menu</p>
        <div className='flex flex-col gap-4'>
          <Link
            className='p-2 flex gap-4 hover:bg-blue-50 rounded-md'
            href='/country'
          >
            <Flag />
            <span className={`${isOpen ? 'hidden md:block' : 'hidden'} text-nowrap overflow-hidden`}>Country</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
