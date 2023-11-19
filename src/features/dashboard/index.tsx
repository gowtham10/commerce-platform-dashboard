"use client";
import { PageHeader } from "@/components/page-header";
import { DashboardProps } from "./dashboard.interface";
import styles from "./dashboard.module.scss";
import { MetricContainer } from "./dashboard__metric-container";

export function Dashboard(props: DashboardProps) {
  console.log("props", props);
  const { allMetrics, enabledMetricKeys, metricDetails } = props;

  if (!metricDetails || !Array.isArray(metricDetails)) {
    throw new Error("Metrics not available");
  }

  return (
    <section className={styles["dashboard"]}>
      <PageHeader title="Dashboard" />
      <div className={styles["dashboard__row"]}>
        {metricDetails.map((metricDetail) => {
          const { key, ...rest } = metricDetail;
          if (enabledMetricKeys.includes(key)) {
            return <MetricContainer {...rest} />;
          }
          return null;
        })}
      </div>
    </section>
  );
}
