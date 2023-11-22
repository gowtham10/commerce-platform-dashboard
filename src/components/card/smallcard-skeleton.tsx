"use client";
import Skeleton from "react-loading-skeleton";
import styles from "./card.module.scss";

export function SmallCardSkeleton() {
  return (
    <div className={styles["skeleton-container"]}>
      <div className={styles["smallcard__summary"]} style={{flex: "1"}}>
        <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
          <Skeleton count={1} width={100} height={15} />
          <Skeleton count={1} width={100} height={15} />
        </div>
      </div>
      <div className={styles["smallcard__icon"]}>
        <Skeleton circle={true} height={30} width={30} />
      </div>
    </div>
  );
}
