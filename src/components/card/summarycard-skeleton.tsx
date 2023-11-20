"use client";
import Skeleton from "react-loading-skeleton";
import styles from "./card.module.scss";

export function SummaryCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles["card__icon"]}>
        <Skeleton circle={true} height={75} width={75} />
      </div>
      <div className={styles["card__summary"]}>
        <div>
          <Skeleton count={2} width={125} height={15} />
        </div>
      </div>
    </div>
  );
}
