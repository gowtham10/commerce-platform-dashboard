"use client";
import useSWR from "swr";
import { TableHeader, TableProps } from "./table.interface";
import { constructSWRKey, postFetcher } from "@/helpers";
import { TableSkeleton } from "./table-skeleton";
import { RequestType } from "../common.interface";
import {
    ColumnDef,
  createColumnHelper,
} from "@tanstack/react-table";
import { ReactTable } from "./react-table";

export function NoFilterTable<F, P>(props: TableProps<F, P>) {
  const { data: tableData, request, filters, tableName = "Sample Table" } =
    props;

  const { data } = useSWR(
    !tableData
      ? constructSWRKey<F, P>(filters as F, request as RequestType<P>)
      : null,
    postFetcher,
  );

  if (!tableData && !data) {
    return <TableSkeleton />;
  }

  const columnHelper = createColumnHelper<any>();
  const { content, headers } = tableData || data;

  const columns = headers.map((header: TableHeader) => {
    const { key, title } = header;
    return columnHelper.accessor(key, {
      header: () => <span>{title}</span>,
    });
  }) as ColumnDef<unknown, any>[];

  return (
    <>
      <span>{tableName}</span>
      <ReactTable data={content} columns={columns} />
    </>
  );
}
