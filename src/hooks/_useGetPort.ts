'use client'

import { CountryApiRepository } from '@/api/country-api-repostiory'
import { IDefaultResponseProps } from '@/models/default-response'
import { IPortProps } from '@/models/domain/port/port'
import { useEffect, useState } from 'react'

export default function useGetPorts(idCountry: string) {
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState<IDefaultResponseProps<IPortProps[]>>()

  const ApiRepo = new CountryApiRepository();

  const fetchData = async (idCountry: string) => {
    setIsLoading(true)
    setIsInitialized(false)
    setIsError(false)
    setIsSuccess(false)
    try {
      const response = await ApiRepo.getPorts(idCountry)
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
      if (idCountry) {
        fetchData(idCountry)
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [idCountry])

  return {
    isLoading,
    isInitialized,
    isSuccess,
    isError,
    data,
  }
}
