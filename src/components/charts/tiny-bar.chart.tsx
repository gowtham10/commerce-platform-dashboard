import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BarChartSkeleton } from "./bar-skeleton";
import { TinyBarChartData, TinyBarChartProps } from "./charts.interface";
import useSWR from "swr";
import { constructSWRKey, postFetcher } from "@/helpers";
import { RequestType } from "../common.interface";

export function TinyBarChart<F>(props: TinyBarChartProps<F>) {
  const { data: chartData, request, filters } = props;

  const { data } = useSWR(
    !chartData
      ? constructSWRKey<F>(filters as F, request as RequestType)
      : null,
    postFetcher,
  );

  if (!chartData && !data) {
    return <BarChartSkeleton />;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={chartData as TinyBarChartData[] || data as TinyBarChartData[]}
        margin={{
          top: 5,
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
        <Bar
          dataKey="value"
          fill="#FFC029"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
