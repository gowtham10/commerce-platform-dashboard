"use client";
import Skeleton from "react-loading-skeleton";
import styles from "./table-skeleton.module.scss";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

export function TableSkeleton() {
  const dummyData = Array(5).fill(null);

  const dummyRow = dummyData.map((_, index) => (
    <td key={index}>
      <Skeleton height={10}/>
    </td>
  ));

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {dummyRow}
        </tr>
      </thead>
      <tbody>
        {dummyData.map((_, index) => <tr key={index}>{dummyRow}</tr>)}
      </tbody>
    </table>
  );
}
