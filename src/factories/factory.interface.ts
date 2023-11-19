import { MetricDetails } from "@/features/dashboard/dashboard.interface";

export type DefaultIconTypeProps = {
  color?: string;
  width?: number;
  height?: number;
  size?: number;
  iconClass?: string;
};

export type IconFactoryTypes = DefaultIconTypeProps;

export type ComponentFactoryProps = MetricDetails;
