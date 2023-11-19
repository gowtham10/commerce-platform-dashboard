import { RequestType } from "@/components/common.interface";
import { ComponentTypeKeys } from "@/constants";

export interface MetricDetails {
  name?: string;
  description?: string;
  type: ComponentTypeKeys;
  request?: RequestType;
  data?: any;
  redirectUrl?: string;
}

type DashboardMetricDetails = MetricDetails & { key: string };

export interface DashboardProps {
  allMetricKeys: string[];
  enabledMetricKeys: string[];
  metricDetails: DashboardMetricDetails[];
}

export type MetricContainerProps = MetricDetails;
