import { RequestType } from "../common.interface";

type CommonTableProps<F, P> = {
  filters?: F;
  request?: RequestType<P>;
  tableName?: string;
};

export interface TableHeader {
  key: string;
  title: string;
}

export interface TableData {
  content: any[];
  headers: TableHeader[];
}

export type TableProps<F, P> = CommonTableProps<F, P> & {
  data: TableData;
};
