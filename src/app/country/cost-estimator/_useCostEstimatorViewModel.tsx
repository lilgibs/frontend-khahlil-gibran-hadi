'use client'
import useGetCountries from '@/hooks/_useGetCountry';
import useGetItems from '@/hooks/_useGetItem';
import useGetPorts from '@/hooks/_useGetPort';
import { useEffect } from 'react';
import { set, useForm } from 'react-hook-form';;

export default function usePurchaseViewModel() {
  const { watch, register, setValue, control, getValues } = useForm({
    values: {
      idCountry: "",
      idPort: "",
      idItem: "",
      discount: 0,
      price: 0,
      totalPrice: ""
    }
  })

  const countries = useGetCountries();
  const ports = useGetPorts(watch(`idCountry`));
  const items = useGetItems(watch(`idPort`));

  useEffect(() => {
    console.log(watch(`idCountry`))
    setValue(`idPort`, "");
    setValue(`idItem`, "");
    setValue(`discount`, 0);
    setValue(`price`, 0);
    setValue(`totalPrice`, "");
  }, [watch(`idCountry`)]);

  useEffect(() => {
    const data = items.data?.data?.find((item) => item.id_barang === watch(`idItem`));
    setValue(`discount`, data?.diskon || 0);
    setValue(`price`, data?.harga || 0);
  }, [items.data?.data, watch(`idItem`)]);

  useEffect(() => {
    watch(`discount`) > 100 && setValue(`discount`, 100)
  }, [watch(`discount`)]);

  useEffect(() => {
    setValue(`totalPrice`,
      Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(watch(`price`) * (1 - watch(`discount`) / 100))
    );
  }, [watch(`price`), watch(`discount`)]);

  return {
    countries,
    ports,
    items,
    watch, register, setValue, control, getValues
  }
}
