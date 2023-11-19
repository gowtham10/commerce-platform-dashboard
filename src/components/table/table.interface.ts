import { RequestType } from "../common.interface";

type CommonTableProps<F> = {
  filters?: F;
  request?: RequestType;
};

export interface TableHeader {
  key: string;
  title: string;
}

export interface TableData {
  content: any[];
  headers: TableHeader[];
}

export type TableProps<F> = CommonTableProps<F> & {
  data: TableData;
};
