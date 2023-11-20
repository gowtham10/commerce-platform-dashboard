import { RequestType } from "../common.interface";

export interface CardData {
  title: string;
  value: string;
  compareValue?: string;
  indicator?: "UP" | "DOWN";
  icon?: string;
  iconColor?: string;
  compareDescription?: string;
  redirectUrl?: string;
}

export type SummaryCardProps = CardData;

export interface CardProps {
  request?: RequestType;
  data?: CardData[];
  filters?: any;
}

