import { CardProps } from "@/components/card/card.interface";
import { MetricDetails } from "../common.interface";

type DashboardMetricDetails = MetricDetails & { key: string };

export interface DashboardProps {
  allMetricOptions: any;
  enabledMetricKeys: string[];
  metricDetails: DashboardMetricDetails[];
  cards?: CardProps;
}

