'use client'

import React from 'react'
import useProductStockViewModel from './_useProductViewModel';
import TablePaginate from '@/components/TablePaginate';
import TRSkeleton from '@/components/TRSkeleton';

export default function UserPageClient() {
  const model = useProductStockViewModel();

  return (
    <div className='p-6 flex flex-col gap-4 bg-white rounded-lg shadow'>
      <h1 className='font-bold text-3xl'>Product</h1>
      <hr />

      <div className='w-full border border-neutral-300 rounded-lg overflow-hidden'>
        <table className='w-full table'>
          <thead className='bg-neutral-100 text-neutral-900'>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {model.products.isSuccess && model.products.data?.data?.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.price}</td>
              </tr>
            ))}
            {model.products.isLoading &&
              <TRSkeleton
                columns={2}
                rows={model.products.watch(`limit`)}
              />}
          </tbody>
        </table>
      </div>
      <TablePaginate
        data={model.products.data?.pagination}
        limit={{ ...model.products.register(`limit`) }}
        page={(value: number) => model.products.setValue(`page`, value)}
      />
    </div>
  )
}
