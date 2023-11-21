"use client";
import styles from "./card.module.scss";
import { CardData, CardProps } from "./card.interface";
import { constructSWRKey, postFetcher } from "@/helpers";
import useSWR from "swr";
import { RequestType } from "../common.interface";
import { CardSkeleton } from "./card-skeleton";
import { SummaryCard } from "./summary-card";

export function Card<F>(props: CardProps) {
  const {
    request,
    data: cardData,
    filters,
    skeletonCount = 3,
  } = props;

  const { data } = useSWR(
    !cardData ? constructSWRKey<F>(filters as F, request as RequestType) : null,
    postFetcher,
  );

  if (!cardData && !data) {
    return <CardSkeleton count={skeletonCount}/>;
  }

  const cards = cardData || (data as any)?.data;

  return (
    <div className={styles["container"]}>
      {(cards as CardData[])?.map((card: CardData) => {
        return <SummaryCard {...card} />;
      })}
    </div>
  );
}
