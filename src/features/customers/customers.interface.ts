import { CardProps } from "@/components/card/card.interface";
import { MetricDetails } from "../common.interface";

type CustomerMetricDetails = MetricDetails & { key: string };

export interface CustomerProps {
  metricDetails: CustomerMetricDetails[];
  cards?: CardProps;
}

