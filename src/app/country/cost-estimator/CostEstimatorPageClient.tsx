'use client'

import React from 'react'
import useCostEstimatorViewModel from './_useCostEstimatorViewModel';
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import InputFieldSkeleton from '@/components/skeleton/InputFieldSkeleton';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { currencyFormat } from '@/utils/currencyFormat';

export default function UserPageClient() {
  const model = useCostEstimatorViewModel();

  return (
    <div className='p-4 lg:p-6 flex flex-col gap-4 bg-white rounded-lg shadow'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-xl lg:text-3xl'>Cost Estimator</h1>
        <Link
          href={`/country`}
          className='px-4 h-[42px] flex items-center gap-2 text-sm font-semibold border border-blue-800 text-blue-800 rounded-lg hover:bg-blue-900 hover:text-white'
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </Link>
      </div>
      <hr />
      <div className='lg:max-w-3/4 flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-sm text-neutral-600'>Country</p>
          {!model.countries.isInitialized && (
            <InputFieldSkeleton
              isLoading={model.countries.isLoading}
            />
          )}
          {model.countries.isSuccess && !model.countries.isLoading && (
            <Controller
              name={`idCountry`}
              control={model.control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  isClearable={true}
                  isSearchable={true}
                  options={model.countries.data?.data?.map((country) => ({ label: country.kode_negara + " - " + country.nama_negara, value: country.id_negara })) || []}
                  onChange={selected => field.onChange(selected ? selected.value : "")}
                  value={
                    model.countries.data?.data?.map(val => ({ value: val.id_negara, label: val.kode_negara + " - " + val.nama_negara })).find(option => option.value === field.value)
                  }
                  classNames={{
                    control: () => "min-w-[250px] h-[42px]",
                  }}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      borderRadius: "8px",
                      outline: "none",
                      boxShadow: "none",
                      borderColor: state.isFocused ? "#d1d5db" : base.borderColor,
                      '&:hover': {
                        borderColor: "#d1d5db"
                      },
                      fontSize: '14px',
                    }),
                    menuList: (base) => ({
                      ...base,
                      fontSize: '14px',
                    }),
                  }}
                />
              )}
            />
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-sm text-neutral-600'>Port</p>
          {(!model.ports.isInitialized || !model.watch(`idCountry`)) && (
            <InputFieldSkeleton
              isLoading={model.ports.isLoading}
              message={"Please select a country first"}
            />
          )}
          {model.ports.isSuccess && !model.ports.isLoading && model.watch(`idCountry`) && (
            <Controller
              name={`idPort`}
              control={model.control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  isClearable={true}
                  isSearchable={true}
                  options={model.ports.data?.data?.map((country) => ({ label: country.nama_pelabuhan, value: country.id_pelabuhan })) || []}
                  onChange={selected => field.onChange(selected ? selected.value : "")}
                  value={
                    model.ports.data?.data?.map(val => ({ value: val.id_pelabuhan, label: val.nama_pelabuhan })).find(option => option.value === field.value) || null
                  }
                  classNames={{
                    control: () => "min-w-[250px] h-[42px]",
                  }}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      borderRadius: "8px",
                      outline: "none",
                      boxShadow: "none",
                      borderColor: state.isFocused ? "#d1d5db" : base.borderColor,
                      '&:hover': {
                        borderColor: "#d1d5db"
                      },
                      fontSize: '14px',
                    }),
                    menuList: (base) => ({
                      ...base,
                      fontSize: '14px',
                    }),
                  }}
                />
              )}
            />
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-sm text-neutral-600'>Item</p>
          {(!model.items.isInitialized || !model.watch(`idPort`)) && (
            <InputFieldSkeleton
              isLoading={model.items.isLoading}
              message={"Please select a port first"}
            />
          )}
          {model.items.isSuccess && !model.items.isLoading && model.watch(`idPort`) && (
            <Controller
              name={`idItem`}
              control={model.control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  isClearable={true}
                  isSearchable={true}
                  options={model.items.data?.data?.map((val) => ({ label: val.id_barang + " - " + val.nama_barang, value: val.id_barang })) || []}
                  onChange={selected => field.onChange(selected ? selected.value : "")}
                  value={
                    model.items.data?.data?.map(val => ({ value: val.id_barang, label: val.id_barang + " - " + val.nama_barang })).find(option => option.value === field.value) || null
                  }
                  classNames={{
                    control: () => "min-w-[250px] h-[42px]",
                  }}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      borderRadius: "8px",
                      outline: "none",
                      boxShadow: "none",
                      borderColor: state.isFocused ? "#d1d5db" : base.borderColor,
                      '&:hover': {
                        borderColor: "#d1d5db"
                      },
                      fontSize: '14px',
                    }),
                    menuList: (base) => ({
                      ...base,
                      fontSize: '14px',
                    }),
                  }}
                />
              )}
            />
          )}
        </div>
        <div className='flex flex-col gap-2 text-sm'>
          <p className='font-semibold text-neutral-600'>Item Details</p>
          <div className='p-4 flex flex-col gap-4 border rounded-lg border-neutral-300'>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
              <div className="flex flex-col gap-2">
                <p className='font-semibold text-neutral-600'>Name</p>
                <p>{model.items.data?.data?.find(item => item.id_barang === model.watch(`idItem`))?.nama_barang || "-"}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className='font-semibold text-neutral-600'>Price</p>
                <p>{currencyFormat(model.items.data?.data?.find(item => item.id_barang === model.watch(`idItem`))?.harga || 0) || "-"}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className='font-semibold text-neutral-600'>Discount</p>
                <p>{model.items.data?.data?.find(item => item.id_barang === model.watch(`idItem`))?.diskon || 0}%</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-neutral-600'>Description</p>
              <p>{model.items.data?.data?.find(item => item.id_barang === model.watch(`idItem`))?.description || "-"}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-sm text-neutral-600'>Discount (%)</p>
          <input
            disabled={!model.watch(`idItem`)}
            type="text"
            className='w-full h-[42px] px-4 border border-neutral-300 rounded-lg bg-white focus:outline-none disabled:bg-neutral-300'
            onKeyDown={(e) => {
              const allowedKeys = [
                "Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete",
              ];
              const isNumber = /^[0-9]$/.test(e.key);

              if (!isNumber && !allowedKeys.includes(e.key)) {
                e.preventDefault();
              }
            }}
            {...model.register(`discount`)}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-sm text-neutral-600'>Price (IDR)</p>
          <input
            disabled={!model.watch(`idItem`)}
            type="text"
            className='w-full h-[42px] px-4 border border-neutral-300 rounded-lg bg-white focus:outline-none disabled:bg-neutral-300'
            onKeyDown={(e) => {
              const allowedKeys = [
                "Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete",
              ];
              const isNumber = /^[0-9]$/.test(e.key);

              if (!isNumber && !allowedKeys.includes(e.key)) {
                e.preventDefault();
              }
            }}
            {...model.register(`price`)}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-sm text-neutral-600'>Total Price (IDR)</p>
          <input
            readOnly
            type="text"
            className='w-full h-[42px] px-4 border border-neutral-300 rounded-lg focus:outline-none read-only:bg-neutral-300'
            {...model.register(`totalPrice`)}
          />
        </div>
      </div>
    </div>
  )
}
