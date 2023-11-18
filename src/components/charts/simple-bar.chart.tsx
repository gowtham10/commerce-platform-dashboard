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
import {
  SimpleBarChartData,
  SimpleBarChartProps,
} from "./charts.interface";
import { BarChartSkeleton } from "./bar-skeleton";
import useSWR from "swr";
import { constructSWRKey, postFetcher } from "@/helpers";
import { RequestType } from "../common.interface";

export function SimpleBarChart<F, P>(props: SimpleBarChartProps<F, P>) {
  const { data: chartData, request, filters, chartName = 'Sample Simple Bar' } = props;

  console.log(chartData, "chartData");

  const { data } = useSWR(
    !chartData
      ? constructSWRKey<F, P>(filters as F, request as RequestType<P>)
      : null,
    postFetcher,
  );

  if (!chartData && !data) {
    return <BarChartSkeleton />;
  }

  return (
    <>
      <span>{chartName}</span>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={chartData as SimpleBarChartData[] ||
            data as SimpleBarChartData[]}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="xAxisName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalValue" fill="#8884d8" />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
