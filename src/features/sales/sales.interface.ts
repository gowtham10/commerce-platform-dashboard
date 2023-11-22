import { CardProps } from "@/components/card/card.interface";
import { MetricDetails } from "../common.interface";

type SalesMetricDetails = MetricDetails & { key: string };

export interface SalesProps {
  metricDetails: SalesMetricDetails[];
  cards?: CardProps;
}

