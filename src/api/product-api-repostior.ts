import { DefaultResponse, IDefaultResponseProps } from "@/models/default-response";
import { IProductProps } from "@/models/domain/product/product";
import { IUserPrrops } from "@/models/domain/user/user";

export class ProductApiRepository {
  async getProducts(props: { page?: number, limit?: number }): Promise<IDefaultResponseProps<IProductProps[]>> {
    const query = new URLSearchParams()
    if (props.page) query.set('page', props.page.toString())
    if (props.limit) query.set('limit', props.limit.toString())

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products?${query.toString()}`);
    return DefaultResponse.create<IProductProps[]>(await response.json()).unmarshall();
  }

}