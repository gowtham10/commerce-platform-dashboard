import { MetricDetails } from "@/features/common.interface";

export type DefaultIconTypeProps = {
  color?: string;
  width?: number;
  height?: number;
  size?: number;
  iconClass?: string;
};

export type IconFactoryTypes = DefaultIconTypeProps;

export type ComponentFactoryProps = MetricDetails & {
  filters?: any;
  handleLastUpdated?: (lastUpdated: string) => void;
};
