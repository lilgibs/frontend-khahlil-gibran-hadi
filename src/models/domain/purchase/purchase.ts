import { IProductProps } from "../product/product"

export interface IPurchaseProps {
  id: string
  productId: string
  product: IProductProps
  quantity: number
  status: string
}