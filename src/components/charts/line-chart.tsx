import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BarChartSkeleton } from "./bar-skeleton";
import { SimpleLineChartData, SimpleLineChartProps } from "./charts.interface";
import useSWR from "swr";
import { constructSWRKey, postFetcher } from "@/helpers";
import { RequestType } from "../common.interface";

export function SimpleLineChart<F>(props: SimpleLineChartProps<F>) {
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
      <LineChart
        width={500}
        height={300}
        data={data as SimpleLineChartData[]}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          stroke="#D1D1D1"
          style={{ fontSize: "0.75rem" }}
          dataKey={meta.xAxisKey || "xAxisName"}
        />
        <YAxis style={{ fontSize: "0.75rem" }} stroke="#D1D1D1">
          <Label
            value="Revenue (₹)"
            stroke="#D1D1D1"
            angle={-90}
            style={{fontSize: "0.85rem"}}
            position="left"
            dy="-10"
          />
        </YAxis>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={meta.valueKey || "value"}
          stroke="#8884d8"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
