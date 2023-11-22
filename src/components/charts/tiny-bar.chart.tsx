import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
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
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data as TinyBarChartData[]}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          style={{ fontSize: "0.75rem" }}
          stroke="#D1D1D1"
          dataKey={meta.xAxisKey || "xAxisName"}
        />
        <YAxis style={{ fontSize: "0.85rem" }} stroke="#D1D1D1">
          <Label
            style={{ fontSize: "0.75rem" }}
            value="Revenue (₹)"
            stroke="#D1D1D1"
            angle={-90}
            position="left"
            dy="-10"
          />
        </YAxis>
        <Tooltip />
        <Legend style={{fontSize: "0.85rem"}}/>
        <Bar
          dataKey={meta.valueKey || "value"}
          fill="#FFC029"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
