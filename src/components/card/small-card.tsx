"use client";
import { IconFactory } from "@/factories/icon-factory";
import {
  ArrowSmallDownIcon,
  ArrowSmallUpIcon,
} from "@heroicons/react/24/solid";
import styles from "./card.module.scss";
import commonStyles from "@/features/common.module.scss";
import { useRouter } from "next/navigation";
import { SmallCardProps } from "./card.interface";

export function SmallCard(props: SmallCardProps) {
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
        className={`${styles["smallcard__compare-container"]} ${
          styles[
            indicator === "UP"
              ? "smallcard__compare__up"
              : "smallcard__compare__down"
          ]
        }`}
      >
        <div style={{ display: "flex", "alignItems": "flex-start" }}>
          <IndicatorIcon width={15} height={15} />
        </div>
        <span>{compareValue}</span>
        {compareDescription && (
          <span className={styles["smallcard__compare-description"]}>
            {compareDescription}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={`${
        commonStyles[redirectUrl ? "cursor-pointer" : "cursor-default"]
      } ${styles.smallcard}`}
      onClick={handleClick}
    >
      <div>
        <div className={styles["smallcard__value-container"]}>
          <span className={styles["smallcard__title"]}>{title}</span>
          <span className={styles["smallcard__value"]}>{value}</span>
        </div>
        <div className={styles["smallcard__icon"]} style={{ color: iconColor }}>
          <IconFactory width={30} height={30} iconName={icon as string} />
        </div>
      </div>
      <div className={styles["smallcard__summary"]}>
        {compareHtml}
      </div>
    </div>
  );
}
