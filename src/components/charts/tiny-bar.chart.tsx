import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
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
import { CustomTooltip } from "./custom-label";

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
          dataKey={meta?.xAxisKey || "xAxisName"}
        >
          <Label
            style={{ fontSize: "0.75rem", fontWeight: "normal" }}
            value={meta?.xAxisLabel || ""}
            stroke="#808e9b"
            dy="-10"
            position={{ x: -20, y: 30 }}
          />
        </XAxis>
        <YAxis style={{ fontSize: "0.85rem" }} stroke="#D1D1D1">
          <Label
            style={{ fontSize: "0.75rem" }}
            value={meta?.yAxisLabel || "Revenue (₹)"}
            stroke="#808e9b"
            angle={-90}
            position="left"
            dy="-10"
          />
        </YAxis>
        <Tooltip content={<CustomTooltip meta={meta?.tooltip} />}/>
        <Legend style={{ fontSize: "0.85rem" }} />
        <Bar
          dataKey={meta?.valueKey || "value"}
          fill="#FFC029"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
