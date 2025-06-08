'use client'

import { useEffect, useState } from "react"

interface ChartLoadingProps {
  maxHeight?: number
  barCount?: number
}

export default function ChartLoading({ barCount = 11 }: ChartLoadingProps) {
  const [heights, setHeights] = useState<string[]>([])

  useEffect(() => {
    const getRandomHeight = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1) + min)

    const maxBarIndex = Math.floor(Math.random() * barCount)
    const generated = Array(barCount).fill(null).map((_, index) =>
      index === maxBarIndex ? `100%` : `${getRandomHeight(35, 100)}%`
    )
    setHeights(generated)
  }, [barCount])

  return (
    <div className="flex flex-col h-full w-full gap-3">
      <div className="h-full w-full rounded animate-pulse relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold">Loading...</div>
        <div className="flex items-baseline space-x-6 px-3 h-full">
          {heights.map((height, index) => (
            <div key={index} style={{ height }} className="w-full bg-gray-300 rounded-t-sm transition-all duration-300 ease-in-out" />
          ))}
        </div>
        <div className="border-b-4 border-gray-300 mb-5"></div>
      </div>
      <div className="flex justify-around">
        {Array(barCount).fill(null).map((_, index) => (
          <div key={index} className="h-2 w-6 bg-gray-300 rounded-md" />
        ))}
      </div>
    </div>
  )
}
