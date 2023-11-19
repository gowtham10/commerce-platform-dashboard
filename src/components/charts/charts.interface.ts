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

interface ChartCommonProps<F> {
  filters?: F;
  request?: RequestType;
}

export type TinyBarChartProps<F> = ChartCommonProps<F> & {
  data?: TinyBarChartData[];
};

export type SimpleBarChartProps<F> = ChartCommonProps<F> & {
  data?: SimpleBarChartData[];
}
