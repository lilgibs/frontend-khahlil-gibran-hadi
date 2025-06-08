import { IMetaPaginationProps } from "@/models/meta-pagination";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

type TPaginationTableProps = {
  data?: IMetaPaginationProps;
  limit: any
  page: (value: number) => void
};

export default function TablePaginate({ data, limit, page }: TPaginationTableProps) {
  return (
    <div className="w-full flex items-center justify-between">
      <span className="text-[#667085]">
        {data?.totalDisplayedRows || 0} of {data?.totalRows || 0} row(s) selected.
      </span>
      <div className="flex items-center gap-[32px]">
        <label className="flex items-center gap-2">
          <h3 className="text-[#514E4E] font-semibold">Show</h3>
          <select
            className="w-[48px] h-[32px] px-2 border rounded-md cursor-pointer"
            defaultValue="10"
            {...limit}
          >
            <option value={1}>1</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </label>
        <h3 className="text-[#514E4E] font-semibold">Page {data?.page || 1} of {data?.totalPages || 1}</h3>
        <div className="flex items-center gap-2">
          <button
            disabled={!data?.prevPage}
            className={`w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center ${!data?.prevPage ? "opacity-50" : "cursor-pointer"
              }`}
            onClick={() => page(1)}
          >
            <ChevronsLeft size={16} color="#514E4E" />
          </button>
          <button
            disabled={!data?.prevPage}
            className={`w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center ${!data?.prevPage ? "opacity-50" : "cursor-pointer"
              }`}
            onClick={() => page(data?.page! - 1)}
          >
            <ChevronLeft size={16} color="#514E4E" />
          </button>
          <button
            disabled={!data?.nextPage}
            className={`w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center ${!data?.nextPage ? "opacity-50" : "cursor-pointer"
              }`}
            onClick={() => page(data?.page! + 1)}
          >
            <ChevronRight size={16} color="#514E4E" />
          </button>
          <button
            disabled={!data?.nextPage}
            className={`w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center ${!data?.nextPage ? "opacity-50" : "cursor-pointer"
              }`}
            onClick={() => page(data?.totalPages!)}
          >
            <ChevronsRight size={16} color="#514E4E" />
          </button>
        </div>
      </div>
    </div>
  );
}
