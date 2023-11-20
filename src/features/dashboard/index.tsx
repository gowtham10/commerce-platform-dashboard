"use client";
import { PageHeader } from "@/components/page-header";
import { DashboardProps } from "./dashboard.interface";
import styles from "./dashboard.module.scss";
import { MetricContainer } from "./dashboard__metric-container";
import { Card } from "@/components/card";

export function Dashboard(props: DashboardProps) {
  console.log("props", props);
  const { cards, allMetrics, enabledMetricKeys, metricDetails } = props;

  if (!metricDetails || !Array.isArray(metricDetails)) {
    throw new Error("Metrics not available");
  }

  return (
    <section className={styles["dashboard"]}>
      <PageHeader title="Dashboard" />
      <div className={styles["dashboard__row"]}>
        <Card {...cards} />
      </div>
      <div className={styles["dashboard__row"]}>
        {metricDetails.map((metricDetail) => {
          const { key, ...rest } = metricDetail;
          if (enabledMetricKeys.includes(key)) {
            return <MetricContainer key={key} {...rest} />;
          }
          return null;
        })}
      </div>
    </section>
  );
}
