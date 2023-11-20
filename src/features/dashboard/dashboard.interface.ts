import { CardProps } from "@/components/card/card.interface";
import { MetricDetails } from "../common.interface";

type DashboardMetricDetails = MetricDetails & { key: string };

export interface DashboardProps {
  allMetricKeys: string[];
  enabledMetricKeys: string[];
  metricDetails: DashboardMetricDetails[];
  cards?: CardProps;
}

