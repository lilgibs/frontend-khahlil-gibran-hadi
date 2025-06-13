'use client'
import { PurchaseApiRepository } from '@/api/purchase-api-repostiory';
import { IDefaultResponseProps } from '@/models/default-response';
import { IPurchaseProps } from '@/models/domain/purchase/purchase';
import { use, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import useGetProducts from '../hooks/_useGetProducts';

export default function usePurchaseViewModel() {
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isOnEdit, setIsOnEdit] = useState(false)
  const [data, setData] = useState<IDefaultResponseProps<IPurchaseProps[]>>()

  const ApiRepo = new PurchaseApiRepository();

  const products = useGetProducts()

  const { watch, register, setValue } = useForm({
    values: {
      page: 1,
      limit: 10
    }
  })

  const purchaseStatusHookForm = useForm({
    values: {
      id: "",
      status: ""
    }
  })

  const createPurchaseHookForm = useForm({
    values: {
      productId: "",
      quantity: 0,
    }
  })

  const inputData = async () => {
    try {
      setIsLoading(true)
      setIsSuccess(false)
      setIsError(false)
      await ApiRepo.createPurchase({
        productId: createPurchaseHookForm.watch(`productId`),
        quantity: Number(createPurchaseHookForm.watch(`quantity`))
      })
      fetchData()
      alert("Purchase created successfully")
    } catch {
      alert("Failed to create purchase")
    } finally {
      createPurchaseHookForm.reset()
      setIsLoading(false)
      setIsOnEdit(false)
    }
  }

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setIsSuccess(false)
      setIsError(false)
      const response = await ApiRepo.getPurchases({
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

  const modifyStatus = async () => {
    try {
      setIsLoading(true)
      setIsSuccess(false)
      setIsError(false)
      await ApiRepo.updatePurchaseStatus({
        id: purchaseStatusHookForm.watch(`id`),
        status: purchaseStatusHookForm.watch(`status`)
      })
      fetchData()
      alert("Status updated successfully")
    } catch {
      alert("Failed to update status")
    } finally {
      setIsLoading(false)
      setIsOnEdit(false)
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
    isOnEdit, setIsOnEdit,
    purchaseStatusHookForm,
    createPurchaseHookForm,
    inputData,
    modifyStatus,
    products,
  }
}
