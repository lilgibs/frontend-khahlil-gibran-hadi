`use client`

import { ProductApiRepository } from '@/api/product-api-repostior'
import { IDefaultResponseProps } from '@/models/default-response'
import { IProductProps } from '@/models/domain/product/product'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function useGetProducts() {
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState<IDefaultResponseProps<IProductProps[]>>()

  const ApiRepo = new ProductApiRepository();
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
      const response = await ApiRepo.getProducts({
        page: watch(`page`),
        limit: watch(`limit`)
      })
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
