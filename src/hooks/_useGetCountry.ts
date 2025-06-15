'use client'

import { CountryApiRepository } from '@/api/country-api-repostiory'
import { IDefaultResponseProps } from '@/models/default-response'
import { ICountryProps } from '@/models/domain/country/country'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function useGetCountries() {
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState<IDefaultResponseProps<ICountryProps[]>>()

  const ApiRepo = new CountryApiRepository();
  const { watch, register, setValue } = useForm({
    values: {
      page: 1,
      limit: 10
    }
  })

  const fetchData = async () => {
    setIsLoading(true)
    setIsInitialized(false)
    setIsError(false)
    setIsSuccess(false)
    try {
      const response = await ApiRepo.getCountries()
      setData(response)
      setIsSuccess(true)
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
      setIsInitialized(true)
    }
  }

  useEffect(() => {

    fetchData()
  }, [])

  return {
    isLoading,
    isInitialized,
    isSuccess,
    isError,
    data,
    register, setValue, watch,
  }
}
