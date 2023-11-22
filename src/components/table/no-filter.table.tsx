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

export function NoFilterTable<F>(props: TableProps<F>) {
  const { data: tableData, request, filters } =
    props;

  const { data } = useSWR(
    !tableData
      ? constructSWRKey<F>(filters as F, request as RequestType)
      : null,
    postFetcher,
  );

  if (!tableData && !data) {
    return <TableSkeleton />;
  }

  const columnHelper = createColumnHelper<any>();
  const { content, headers } = tableData || data;

  const columns = headers?.map((header: TableHeader) => {
    const { key, title } = header;
    return columnHelper.accessor(key, {
      header: () => <span>{title}</span>,
    });
  }) as ColumnDef<unknown, any>[];

  return (
    <>
      <ReactTable data={content} columns={columns} />
    </>
  );
}
