import { RequestType } from "@/components/common.interface";
import { ComponentTypeKeys } from "@/constants";

export interface MetricDetails {
  name?: string;
  description?: string;
  type: ComponentTypeKeys;
  request?: RequestType;
  data?: any;
  redirectUrl?: string;
  key?: string;
}

export type MetricContainerProps = MetricDetails & { filters?: any };
