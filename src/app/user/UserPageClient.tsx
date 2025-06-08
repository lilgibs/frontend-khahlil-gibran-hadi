'use client'

import React from 'react'
import useUserViewModel from './_useUserViewModel';
import moment from 'moment';
import TablePaginate from '@/components/TablePaginate';
import TRSkeleton from '@/components/TRSkeleton';

export default function UserPageClient() {
  const model = useUserViewModel();

  return (
    <div className='p-6 flex flex-col gap-4 bg-white rounded-lg shadow'>
      <h1 className='font-bold text-3xl'>USER LIST</h1>
      <hr />

      <div className='w-full border border-neutral-300 rounded-lg overflow-hidden'>
        <table className='w-full table'>
          <thead className='bg-neutral-100 text-neutral-900'>
            <tr>
              <th>Date</th>
              {/* <th>Login Hour</th> */}
              <th>Phone Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Birth Year</th>
              <th>Gender</th>
              <th>Device</th>
              <th>Name Of Location</th>
              <th>Location Type</th>
              <th>Digital Interest</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {model.isSuccess && model.data?.data?.map((user) => (
              <tr key={user._id}>
                <td>{moment(user.date).format('DD-MM-YYYY')}</td>
                {/* <td>{user.loginHour}</td> */}
                <td>{user.phoneNumber}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.birthYear}</td>
                <td>{user.gender}</td>
                <td>{user.brandDevice}</td>
                <td>{user.nameOfLocation}</td>
                <td>{user.locationType}</td>
                <td>{user.digitalInterest}</td>
              </tr>
            ))}
            {model.isLoading &&
              <TRSkeleton
                columns={10}
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
