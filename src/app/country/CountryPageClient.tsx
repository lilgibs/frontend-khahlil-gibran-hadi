'use client'

import React from 'react'
import useCountryViewModel from './_useCountryViewModel';
import TRSkeleton from '@/components/TRSkeleton';
import { DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function CountryPageClient() {
  const model = useCountryViewModel();

  return (
    <div className='p-4 lg:p-6 flex flex-col gap-4 bg-white rounded-lg shadow'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-xl lg:text-3xl'>Country</h1>
        <Link
          href={`/country/cost-estimator`}
          className='h-[42px] flex items-center gap-2 bg-blue-800 text-sm text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-900'
        >
          <DollarSign size={16} />
          <span>Cost Estimator</span>
        </Link>
      </div>
      <hr />
      <div className='grid grid-cols-1'>
        <div className='overflow-x-auto flex-1 border border-neutral-300 rounded-lg'>
          <table className="w-full table">
            <thead className='bg-neutral-100 text-neutral-900'>
              <tr>
                <th>ID</th>
                <th>Country Name</th>
                <th>Country Code</th>
              </tr>
            </thead>
            <tbody className='text-sm'>
              {model.countries.isSuccess && model.countries.data?.data?.map((user) => (
                <tr key={user.id_negara}>
                  <td>{user.id_negara}</td>
                  <td>{user.nama_negara}</td>
                  <td>{user.kode_negara}</td>
                </tr>
              ))}
              {model.countries.isLoading &&
                <TRSkeleton
                  columns={3}
                  rows={10}
                />}
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}
