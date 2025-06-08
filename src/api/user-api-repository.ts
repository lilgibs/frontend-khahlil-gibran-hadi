import { DefaultResponse, IDefaultResponseProps } from "@/models/default-response";
import { IUserPrrops } from "@/models/domain/user/user";

export class UserApiRepository {
  async getUsers(props: { page?: number, limit?: number }): Promise<IDefaultResponseProps<IUserPrrops[]>> {
    const query = new URLSearchParams()
    if (props.page) query.set('page', props.page.toString())
    if (props.limit) query.set('limit', props.limit.toString())

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users?${query.toString()}`);
    return DefaultResponse.create<IUserPrrops[]>(await response.json()).unmarshall();
  }
}