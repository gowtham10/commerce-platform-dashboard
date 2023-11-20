"use client";
import { PageHeader } from "@/components/page-header";
import { DashboardProps } from "./dashboard.interface";
import styles from "./dashboard.module.scss";
import { MetricContainer } from "./dashboard__metric-container";
import { Card } from "@/components/card";
import { SimpleControlSelect } from "@/components/select/simple-control-select";
import { useState } from "react";
import {
  getCheckboxOption,
  getValueContainer,
} from "@/components/select/select-components";

export function Dashboard(props: DashboardProps) {
  console.log("props", props);
  const { cards, allMetricOptions, enabledMetricKeys, metricDetails } = props;

  const [selectedMetrics, setSelectedMetrics] = useState(enabledMetricKeys);

  const handleMetricSelection = (selectedOptions: any) => {
    const updatedMetrics = selectedOptions?.map((selectedOption: any) =>
      selectedOption?.value
    );
    console.log("updatedMetrics", updatedMetrics);
    setSelectedMetrics(updatedMetrics);
  };

  if (!metricDetails || !Array.isArray(metricDetails)) {
    throw new Error("Metrics not available");
  }

  return (
    <section className={styles["dashboard"]}>
      <div className={styles["dashboard__header"]}>
        <div>
          <PageHeader title="Dashboard" />
        </div>
        <div>
          <SimpleControlSelect
            options={allMetricOptions}
            initialSelectedOptions={allMetricOptions}
            handleSelection={handleMetricSelection}
            customComponents={{
              ValueContainer: getValueContainer("Metrics Selected: "),
              Option: getCheckboxOption(),
            }}
          />
        </div>
      </div>
      <div className={styles["dashboard__content"]}>
        <div className={styles["dashboard__row"]}>
          <Card {...cards} />
        </div>
        <div className={styles["dashboard__row"]}>
          {metricDetails.map((metricDetail) => {
            const { key, ...rest } = metricDetail;
            if (selectedMetrics.includes(key)) {
              return <MetricContainer key={key} {...rest} />;
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
