import { DefaultResponse, IDefaultResponseProps } from "@/models/default-response";
import { IProductStockProps } from "@/models/domain/product-stock/product-stock";
import { IUserPrrops } from "@/models/domain/user/user";

export class ProductStockApiRepository {
  async getProductStocks(props: { page?: number, limit?: number }): Promise<IDefaultResponseProps<IProductStockProps[]>> {
    const query = new URLSearchParams()
    if (props.page) query.set('page', props.page.toString())
    if (props.limit) query.set('limit', props.limit.toString())

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}product-stocks?${query.toString()}`);
    return DefaultResponse.create<IProductStockProps[]>(await response.json()).unmarshall();
  }


  async getUserGenderOverview(): Promise<IDefaultResponseProps<{ name: string, value: number }[]>> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users/gender-overview`);
    return DefaultResponse.create<{ name: string, value: number }[]>(await response.json()).unmarshall();
  }

  async getUserLocationTypeOverview(): Promise<IDefaultResponseProps<{ name: string, value: number }[]>> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users/location-type-overview`);
    return DefaultResponse.create<{ name: string, value: number }[]>(await response.json()).unmarshall();
  }

  async getUserBrandDeviceOverview(): Promise<IDefaultResponseProps<{ name: string, value: number }[]>> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users/brand-device-overview`);
    return DefaultResponse.create<{ name: string, value: number }[]>(await response.json()).unmarshall();
  }

  async getUserDigitalInterestOverview(): Promise<IDefaultResponseProps<{ name: string, value: number }[]>> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users/digital-interest-overview`);
    return DefaultResponse.create<{ name: string, value: number }[]>(await response.json()).unmarshall();
  }
}