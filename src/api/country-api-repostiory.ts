import { DefaultResponse, IDefaultResponseProps } from "@/models/default-response";
import { ICountryProps } from "@/models/domain/country/country";
import { IItemProps } from "@/models/domain/item/item";
import { IPortProps } from "@/models/domain/port/port";

export class CountryApiRepository {
  async getCountries(): Promise<IDefaultResponseProps<ICountryProps[]>> {
    const response = await fetch(`/api/countries`);
    return DefaultResponse.create<ICountryProps[]>({ message: "Success", data: await response.json() }).unmarshall();
  }

  async getPorts(idCountry: string): Promise<IDefaultResponseProps<IPortProps[]>> {
    const filter = JSON.stringify({ where: { id_negara: idCountry } });
    const response = await fetch(`/api/ports?filter=${encodeURIComponent(filter)}`);
    const json = await response.json();
    return DefaultResponse.create<IPortProps[]>({ message: "Success", data: json }).unmarshall();
  }

  async getItems(idPort: string): Promise<IDefaultResponseProps<IItemProps[]>> {
    const filter = JSON.stringify({ where: { id_pelabuhan: idPort } });
    const response = await fetch(`/api/items?filter=${encodeURIComponent(filter)}`);
    const json = await response.json();
    return DefaultResponse.create<IItemProps[]>({ message: "Success", data: json }).unmarshall();
  }
}