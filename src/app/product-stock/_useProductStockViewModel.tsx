'use client'

import { ProductStockApiRepository } from '@/api/product-stock-api-repostiory';
import { IDefaultResponseProps } from '@/models/default-response';
import { IProductStockProps } from '@/models/domain/product-stock/product-stock';
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

export default function useProductStockViewModel() {
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState<IDefaultResponseProps<IProductStockProps[]>>()

  const ApiRepo = new ProductStockApiRepository();
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
      const response = await ApiRepo.getProductStocks({
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
