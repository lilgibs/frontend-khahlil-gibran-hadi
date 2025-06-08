import { Entity } from "./_entity";
import { IMetaPaginationProps } from "./meta-pagination";

export interface IDefaultResponseProps<T> {
  message?: string;
  data?: T;
  pagination?: IMetaPaginationProps;
}

export interface IDefaultResponse<T> {
  unmarshall(): IDefaultResponseProps<T>;
}

export class DefaultResponse<T>
  extends Entity<IDefaultResponseProps<T>>
  implements IDefaultResponse<T>
{
  static create<T>(props: IDefaultResponseProps<T>) {
    return new DefaultResponse(props);
  }
  unmarshall(): IDefaultResponseProps<T> {
    const unmarshalledData: IDefaultResponseProps<T> = {};

    if (typeof this.message !== "undefined") {
      unmarshalledData.message = this.message;
    }

    if (typeof this.data !== "undefined") {
      unmarshalledData.data = this.data;
    }

    if (typeof this.pagination !== "undefined") {
      unmarshalledData.pagination = this.pagination;
    }

    return unmarshalledData;
  }

  get message(): string | undefined {
    return this._props.message;
  }
  get data(): T | undefined {
    return this._props.data;
  }
  get pagination(): IMetaPaginationProps | undefined {
    return this._props.pagination;
  }
}