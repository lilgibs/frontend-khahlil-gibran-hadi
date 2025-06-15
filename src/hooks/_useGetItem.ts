'use client'

import { CountryApiRepository } from '@/api/country-api-repostiory'
import { IDefaultResponseProps } from '@/models/default-response'
import { IItemProps } from '@/models/domain/item/item'
import { useEffect, useState } from 'react'

export default function useGetItems(idPort: string) {
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState<IDefaultResponseProps<IItemProps[]>>()

  const ApiRepo = new CountryApiRepository();

  const fetchData = async (idPort: string) => {
    setIsLoading(true)
    setIsInitialized(false)
    setIsError(false)
    setIsSuccess(false)
    try {
      const response = await ApiRepo.getItems(idPort)
      setData(response)
      setIsSuccess(true)
    } catch {
      setIsError(true)
    } finally {
      setIsInitialized(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (idPort) {
        fetchData(idPort)
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [idPort])

  return {
    isLoading,
    isInitialized,
    isSuccess,
    isError,
    data,
  }
}
