'use client'

import useGetProducts from '../hooks/_useGetProducts';

export default function useProductViewModel() {
  const products = useGetProducts()

  return { products }
}
