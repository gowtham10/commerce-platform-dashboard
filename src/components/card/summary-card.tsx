"use client";
import { IconFactory } from "@/factories/icon-factory";
import {
  ArrowSmallDownIcon,
  ArrowSmallUpIcon,
} from "@heroicons/react/24/solid";
import styles from "./card.module.scss";
import { useRouter } from "next/navigation";
import { SummaryCardProps } from "./card.interface";


export function SummaryCard(props: SummaryCardProps) {
  const {
    title,
    value,
    compareValue,
    indicator,
    icon,
    iconColor = "#000",
    compareDescription,
    redirectUrl,
  } = props;

  let compareHtml = null;
  const router = useRouter();

  const handleClick = () => {
    if (redirectUrl) {
      router.push(redirectUrl);
    }
  };

  if (compareValue && indicator) {
    const IndicatorIcon = indicator === "UP"
      ? ArrowSmallUpIcon
      : ArrowSmallDownIcon;
    compareHtml = (
      <div
        className={`${styles["card__compare-container"]} ${
          styles[
            indicator === "UP" ? "card__compare__up" : "card__compare__down"
          ]
        }`}
      >
        <span>{compareValue}</span>
        <IndicatorIcon width={20} height={20} />
        {compareDescription && (
          <span className={styles["card__compare-description"]}>
            {compareDescription}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles["card__icon"]} style={{ color: iconColor }}>
        <IconFactory width={75} height={75} iconName={icon as string} />
      </div>
      <div className={styles["card__summary"]}>
        <div>
          <span className={styles["card__value"]}>{value}</span>
          <span className={styles["card__title"]}>{title}</span>
        </div>
        {compareHtml}
      </div>
    </div>
  );
}

