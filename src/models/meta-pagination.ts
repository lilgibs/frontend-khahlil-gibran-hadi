import { Entity } from "./_entity";

export interface IMetaPaginationProps {
  page: number;
  limit: number;
  totalPages: number;
  totalDisplayedRows: number;
  totalRows: number;
  nextPage: number | null;
  prevPage: number | null;
}

export interface IMetaPagination {
  unmarshall(): IMetaPaginationProps;
}

export class MetaPagination
  extends Entity<IMetaPaginationProps>
  implements IMetaPagination {
  static create(props: IMetaPaginationProps) {
    return new MetaPagination(props);
  }
  unmarshall(): IMetaPaginationProps {
    return {
      page: this.page,
      limit: this.limit,
      totalDisplayedRows: this.totalDisplayedRows,
      totalRows: this.totalRows,
      totalPages: this.totalPages,
      nextPage: this.nextPage,
      prevPage: this.prevPage,
    };
  }

  get page(): number {
    return this._props.page;
  }

  get limit(): number {
    return this._props.limit;
  }

  get totalDisplayedRows(): number {
    return this._props.totalDisplayedRows;
  }

  get totalRows(): number {
    return this._props.totalRows;
  }

  get totalPages(): number {
    return this._props.totalPages;
  }

  get nextPage(): number | null {
    return this._props.nextPage;
  }

  get prevPage(): number | null {
    return this._props.prevPage;
  }
}
