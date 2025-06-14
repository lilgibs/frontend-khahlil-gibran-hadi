import { IProductProps } from "../country/country"

export interface IPurchaseProps {
  id: string
  productId: string
  product: IProductProps
  quantity: number
  status: string
}