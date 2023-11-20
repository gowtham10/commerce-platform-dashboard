import { CardProps } from "@/components/card/card.interface";
import { MetricDetails } from "../common.interface";

type ProductMetricDetails = MetricDetails & { key: string };

export interface ProductProps {
  metricDetails: ProductMetricDetails[];
  cards?: CardProps;
}


