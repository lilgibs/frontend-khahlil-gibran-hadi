import { IProductProps } from "../product/product"

export interface IProductStockProps {
  id: string
  productId: string
  quantity: number
  product: IProductProps
}