import { IProductProps } from "../country/country"

export interface IProductStockProps {
  id: string
  productId: string
  quantity: number
  product: IProductProps
}