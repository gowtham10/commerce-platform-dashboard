"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SimpleBarChartData, SimpleBarChartProps } from "./charts.interface";
import { BarChartSkeleton } from "./bar-skeleton";
import useSWR from "swr";
import { constructSWRKey, postFetcher } from "@/helpers";
import { RequestType } from "../common.interface";

export function SimpleBarChart<F>(props: SimpleBarChartProps<F>) {
  const { data: chartData, request, filters } = props;

  const { data: fetchedData } = useSWR(
    !chartData
      ? constructSWRKey<F>(filters as F, request as RequestType)
      : null,
    postFetcher,
  );

  if (!chartData && !fetchedData) {
    return <BarChartSkeleton />;
  }

  const { data, meta } = chartData || fetchedData as any || {};

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data as SimpleBarChartData[]}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={meta?.xAxisKey || "xAxisName"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey={meta?.totalValueKey || "totalValue"}
            fill="#8884d8"
          />
          <Bar dataKey={meta?.valueKey || "value"} fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
