'use client'
import useGetCountries from '@/hooks/_useGetCountry';
import { useForm } from 'react-hook-form';
// import useGetProducts from '../hooks/_useGetProducts';

export default function usePurchaseViewModel() {
  const countries = useGetCountries()

  return {
    countries
  }
}
