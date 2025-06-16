import React from 'react'

interface IProps {
  title: string
  children: React.ReactNode
}

export default function FieldSection({ title, children }: IProps) {
  return (
    <div className={`flex-1 flex flex-col md:flex-row gap-2 bg`}>
      <div className='w-full md:w-1/3 flex flex-col md:flex-row md:justify-between gap-2'>
        <p className='text-sm text-neutral-600 font-semibold'>{title}</p>
        <div className='hidden md:block h-full w-[2px] bg-blue-900' />
        <div className='md:hidden w-full h-[2px] bg-blue-900' />
      </div>
      <div className='w-full md:w-2/3 flex flex-col gap-2'>
        {children}
      </div>
    </div>
  )
}
