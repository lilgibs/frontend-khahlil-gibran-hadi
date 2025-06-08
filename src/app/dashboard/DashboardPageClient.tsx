'use client'

import React from 'react'
import UserOverviewChart from './UserOverviewChart'
import useDashboardViewModel from './_useDashboardViewModel'
import UserBarChart from './UserBarChart'
import ChartLoading from '@/components/ChartLoading'

export default function DashboardPageClient() {
  const model = useDashboardViewModel()

  return (
    <div className='p-6 flex flex-col gap-4 bg-white rounded-lg shadow'>
      <h1 className='font-bold text-3xl'>DASHBOARD</h1>
      <hr />
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-1 p-4 flex flex-col gap-4 border border-neutral-300 rounded-lg'>
          <h2 className='font-semibold text-2xl'>User Overview</h2>
          <div className="h-[300px] relative">
            {model.genderOverview.isLoading &&
              <ChartLoading barCount={5} />
            }
            {model.genderOverview.isSuccess &&
              <UserOverviewChart data={model.genderOverview.data?.data || []} />
            }
          </div>
        </div>
        <div className='col-span-2 p-4 flex flex-col gap-4 border border-neutral-300 rounded-lg'>
          <h2 className='font-semibold text-2xl'>Location Type Overview</h2>
          <div className="h-[300px] relative">
            {model.locationTypeOverview.isLoading &&
              <ChartLoading barCount={10} />
            }
            {model.locationTypeOverview.isSuccess &&
              <UserBarChart data={model.locationTypeOverview.data?.data || []} />
            }
          </div>
        </div>
      </div>

      <div className='p-4 flex flex-col gap-4 border border-neutral-300 rounded-lg'>
        <h2 className='font-semibold text-2xl'>Brand Device Overview</h2>
        <div className="h-[400px] relative">
          {model.brandDeviceOverview.isLoading &&
            <ChartLoading barCount={15} />
          }
          {model.brandDeviceOverview.isSuccess &&
            <UserBarChart data={model.brandDeviceOverview.data?.data || []} />
          }
        </div>
      </div>

      <div className='p-4 flex flex-col gap-4 border border-neutral-300 rounded-lg'>
        <h2 className='font-semibold text-2xl'>Digital Interest Overview</h2>
        <div className="h-[400px] relative">
          {model.digitalInterestOverview.isLoading &&
            <ChartLoading barCount={15} />
          }
          {model.digitalInterestOverview.isSuccess &&
            <UserBarChart data={model.digitalInterestOverview.data?.data || []} />
          }
        </div>
      </div>
    </div>
  )
}
