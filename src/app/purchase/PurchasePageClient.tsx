'use client'

import React from 'react'
import useProductStockViewModel from './_usePurchaseViewModel';
import TablePaginate from '@/components/TablePaginate';
import TRSkeleton from '@/components/TRSkeleton';
import { Check, Edit, Plus, X } from 'lucide-react';

export default function UserPageClient() {
  const model = useProductStockViewModel();

  return (
    <div className='p-6 flex flex-col gap-4 bg-white rounded-lg shadow'>
      <h1 className='font-bold text-3xl'>Purchase</h1>
      <hr />
      <div
        className='py-4 px-6 flex flex-row justify-between bg-neutral-100 rounded-lg'
      >
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex items-center gap-2'>
            <p className='text-sm font-semibold text-neutral-600'>
              Product
            </p>
            <select
              className={`w-full h-[42px] px-4 border ${model.createPurchaseHookForm.formState.errors.productId ? 'border-red-500' : 'border-neutral-300'} rounded-md bg-white`}
              {...model.createPurchaseHookForm.register('productId', { required: true })}
            >
              <option value={""}>--- Select Product ---</option>
              {model.products.isSuccess && model.products.data?.data?.map((val) => (
                <option key={val.id} value={val.id}>{val.name}</option>
              ))}
            </select>
          </div>
          <div className='flex items-center gap-2'>
            <p className='text-sm font-semibold text-neutral-600'>
              Quantity
            </p>
            <input
              className={`w-full h-[42px] px-4 border ${model.createPurchaseHookForm.formState.errors.quantity ? 'border-red-500' : 'border-neutral-300'} rounded-md bg-white`}
              {...model.createPurchaseHookForm.register('quantity', {
                required: true,
                min: 1,
                pattern: /^[0-9]+$/
              })}
            />
          </div>
        </div>
        <button
          onClick={model.createPurchaseHookForm.handleSubmit((_data) => { model.inputData() })}
          className='px-2 h-[42px] flex items-center justify-center gap-2 bg-blue-900 rounded-lg text-white text-sm font-semibold cursor-pointer'
        >
          <Plus />
          Submit Purchase
        </button>
      </div>
      <div className='w-full border border-neutral-300 rounded-lg overflow-hidden'>
        <table className='w-full table'>
          <thead className='bg-neutral-100 text-neutral-900'>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {model.isSuccess && model.data?.data?.map((user) => (
              <tr key={user.id}>
                <td>{user.product.name}</td>
                <td>{user.quantity}</td>
                <td>{
                  model.isOnEdit && user.id === model.purchaseStatusHookForm.watch(`id`) ?
                    <select
                      className='h-[42px] px-4 border rounded-md'
                      {...model.purchaseStatusHookForm.register(`status`)}
                    >
                      <option value="waiting_for_payment">Waiting For Payment</option>
                      <option value="completed">Completed</option>
                      <option value="canceled">Canceled</option>
                    </select>
                    :
                    user.status
                }</td>
                <td className='w-0'>
                  {model.isOnEdit && user.id === model.purchaseStatusHookForm.watch(`id`) ?
                    <div className='flex flex-row gap-2'>
                      <button
                        className='h-[42px] w-[42px] flex items-center justify-center bg-green-400 rounded-lg text-white cursor-pointer'
                        onClick={() => {
                          model.modifyStatus()
                        }}
                      >
                        <Check />
                      </button>
                      <button
                        className='h-[42px] w-[42px] flex items-center justify-center bg-red-400 rounded-lg text-white cursor-pointer'
                        onClick={() => {
                          model.purchaseStatusHookForm.setValue(`id`, "")
                          model.setIsOnEdit(false)
                        }}
                      >
                        <X />
                      </button>
                    </div>
                    :
                    <div className='flex flex-row gap-2 justify-start'>
                      <button
                        className='h-[42px] w-[42px] flex items-center justify-center bg-yellow-400 rounded-lg text-white cursor-pointer'
                        onClick={() => {
                          model.purchaseStatusHookForm.setValue(`id`, user.id)
                          model.purchaseStatusHookForm.setValue(`status`, user.status)
                          model.setIsOnEdit(true)
                        }}
                      >
                        <Edit />
                      </button>
                    </div>
                  }
                </td>
              </tr>
            ))}
            {model.isLoading &&
              <TRSkeleton
                columns={4}
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
