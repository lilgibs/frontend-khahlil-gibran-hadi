import { DefaultResponse, IDefaultResponseProps } from "@/models/default-response";
import { IPurchaseProps } from "@/models/domain/purchase/purchase";

export class PurchaseApiRepository {
  async createPurchase(props: { productId: string, quantity: number }): Promise<void> {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}purchases`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: props.productId,
        quantity: props.quantity
      }),
    });
  }

  async getPurchases(props: { page?: number, limit?: number }): Promise<IDefaultResponseProps<IPurchaseProps[]>> {
    const query = new URLSearchParams()
    if (props.page) query.set('page', props.page.toString())
    if (props.limit) query.set('limit', props.limit.toString())

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}purchases?${query.toString()}`);
    return DefaultResponse.create<IPurchaseProps[]>(await response.json()).unmarshall();
  }

  async updatePurchaseStatus(props: { id: string, status: string }): Promise<void> {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}purchases/${props.id}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: props.status }),
    });
  }
}