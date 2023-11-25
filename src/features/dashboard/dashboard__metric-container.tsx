"use client";
import { ComponentFactory } from "@/factories/component-factory";
import styles from "./dashboard.module.scss";
import { useRouter } from "next/navigation";
import { MetricContainerProps } from "../common.interface";
import commonStyles from "@/features/common.module.scss";
import { useEffect, useState } from "react";

export function MetricContainer(props: MetricContainerProps) {
  const {
    redirectUrl,
    name,
    type,
    request,
    data,
    filters,
    showLastUpdated = false,
  } = props;
  const router = useRouter();
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString());
  }, []);

  const handleLastUpdated = (updatedTime: string) =>
    setLastUpdated(updatedTime);

  const handleClick = () => {
    if (redirectUrl) {
      router.push(redirectUrl);
    }
  };

  return (
    <div
      data-test-id="metrics"
      className={`${styles["dashboard__metric-container"]} ${
        redirectUrl ? commonStyles["cursor-pointer"] : ""
      }`}
      onClick={handleClick}
    >
      <div className={styles["metrics__header"]}>
        <span className={styles["metrics__header__name"]}>{name}</span>
        {showLastUpdated && lastUpdated
          ? (
            <span className={styles["metrics__header__timestamp"]}>
              Last Updated: {lastUpdated}
            </span>
          )
          : null}
      </div>
      <ComponentFactory
        type={type}
        request={request}
        data={data}
        filters={filters}
        handleLastUpdated={handleLastUpdated}
      />
    </div>
  );
}
