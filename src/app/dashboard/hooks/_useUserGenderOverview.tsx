'use client'

import { UserApiRepository } from '@/api/user-api-repository';
import { IDefaultResponseProps } from '@/models/default-response';
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

export default function useUserGenderOverview() {
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState<IDefaultResponseProps<{ name: string, value: number }[]>>()

  const ApiRepo = new UserApiRepository();
  const { watch, register, setValue } = useForm({
    values: {
      page: 1,
      limit: 10
    }
  })

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setIsError(false)
      setIsSuccess(false)
      const response = await ApiRepo.getUserGenderOverview()
      setData(response)
      setIsSuccess(true)
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchData()
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [watch(`page`), watch(`limit`)])

  return {
    isLoading,
    isSuccess,
    isError,
    data,
    register, setValue, watch,
  }
}
