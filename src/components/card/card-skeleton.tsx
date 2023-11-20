import styles from "./card.module.scss";
import { SummaryCardSkeleton } from "./summarycard-skeleton";

export function CardSkeleton(props: { count?: number }) {
  const { count = 3 } = props;

  return (
    <div className={styles["card__skeleton"]}>
      {Array(count).fill(null).map((_, index: number) => (
        <SummaryCardSkeleton key={index} />
      ))}
    </div>
  );
}
