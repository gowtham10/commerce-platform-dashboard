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
  isImproved?: boolean;
}

export type SummaryCardProps = CardData;
export type SmallCardProps = CardData & {key: number};

export interface CardProps {
  request?: RequestType;
  data?: CardData[];
  filters?: any;
  skeletonCount?: number;
}

