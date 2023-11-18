import { RequestType } from "../common.interface";

export interface TinyBarChartData {
  xAxisName: string;
  value: number;
}

export interface SimpleBarChartData {
  xAxisName: string;
  totalValue: number;
  value: number;
}

interface ChartCommonProps<F, P> {
  filters?: F;
  request?: RequestType<P>;
  chartName?: string;
}

export type TinyBarChartProps<F, P> = ChartCommonProps<F, P> & {
  data?: TinyBarChartData[];
};

export type SimpleBarChartProps<F, P> = ChartCommonProps<F, P> & {
  data?: SimpleBarChartData[];
}
