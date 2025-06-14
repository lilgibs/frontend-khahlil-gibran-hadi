'use client'
import useGetCountries from '@/hooks/_useGetCountry';

export default function usePurchaseViewModel() {
  const countries = useGetCountries()

  return {
    countries
  }
}
