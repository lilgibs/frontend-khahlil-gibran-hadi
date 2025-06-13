'use client'

import React from 'react'
import useProductStockViewModel from './_useProductStockViewModel';
import TablePaginate from '@/components/TablePaginate';
import TRSkeleton from '@/components/TRSkeleton';

export default function UserPageClient() {
  const model = useProductStockViewModel();

  return (
    <div className='p-6 flex flex-col gap-4 bg-white rounded-lg shadow'>
      <h1 className='font-bold text-3xl'>Product Stock</h1>
      <hr />

      <div className='w-full border border-neutral-300 rounded-lg overflow-hidden'>
        <table className='w-full table'>
          <thead className='bg-neutral-100 text-neutral-900'>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {model.isSuccess && model.data?.data?.map((user) => (
              <tr key={user.id}>
                <td>{user.product.name}</td>
                <td>{user.quantity}</td>
              </tr>
            ))}
            {model.isLoading &&
              <TRSkeleton
                columns={2}
                rows={model.watch(`limit`)}
              />}
          </tbody>
        </table>
      </div>
      <TablePaginate
        data={model.data?.pagination}
        limit={{ ...model.register(`limit`) }}
        page={(value: number) => model.setValue(`page`, value)}
      />
    </div>
  )
}
