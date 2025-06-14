import { Menu } from 'lucide-react'
import React from 'react'

export default function Navbar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

  return (
    <div className={`z-50 sticky top-0 w-full h-[72px] p-4 flex items-center bg-blue-900 shadow-md transition-all duration-300 ease-in-out`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='hidden md:block text-white cursor-pointer'
      >
        <Menu />
      </button>
    </div>
  )
}
