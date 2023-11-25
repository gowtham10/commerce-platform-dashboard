import { RequestType } from "../common.interface";

export interface TinyBarChartData {
  xAxisName: string;
  value: number;
}

export type SimpleLineChartData = TinyBarChartData;

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

export type SimpleLineChartProps<F> = ChartCommonProps<F> & {
  data?: SimpleLineChartData[];
  handleLastUpdated?: (lastUpdated: string) => void;
};

export type SimpleBarChartProps<F> = ChartCommonProps<F> & {
  data?: SimpleBarChartData[];
};
