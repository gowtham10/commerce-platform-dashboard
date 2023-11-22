"use client";
import { PageHeader } from "@/components/page-header";
import { DashboardProps } from "./dashboard.interface";
import styles from "./dashboard.module.scss";
import { MetricContainer } from "./dashboard__metric-container";
import { Card } from "@/components/card";
import { SimpleControlSelect } from "@/components/select/simple-control-select";
import { useEffect, useState } from "react";
import {
  getCheckboxOption,
  getDropdownIndicator,
  getIndicatorsContainer,
  getValueContainer,
} from "@/components/select/select-components";
import { filterSelectedOptions, getItem, getSelectedValues, setItem } from "@/helpers";
import { LocalStorageKeys } from "@/constants/localstorage-keys";

export function Dashboard(props: DashboardProps) {
  const { cards, allMetricOptions, enabledMetricKeys, metricDetails } = props;

  const [selectedMetrics, setSelectedMetrics] = useState(enabledMetricKeys);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const enabledMetrics = getItem(
      LocalStorageKeys?.DASHBOARD_SELECTED_METRICS,
    );
    if (enabledMetrics) {
      setSelectedMetrics(enabledMetrics?.split(","));
    }
    setShowFilters(true);
  }, []);

  const handleMetricSelection = (selectedOptions: any) => {
    const updatedMetrics = selectedOptions?.map((selectedOption: any) =>
      selectedOption?.value
    );
    setItem(LocalStorageKeys?.DASHBOARD_SELECTED_METRICS, updatedMetrics);
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
          {showFilters && (
            <SimpleControlSelect
              options={allMetricOptions}
              initialSelectedOptions={filterSelectedOptions(allMetricOptions, getSelectedValues(enabledMetricKeys, LocalStorageKeys?.DASHBOARD_SELECTED_METRICS))}
              handleSelection={handleMetricSelection}
              customComponents={{
                ValueContainer: getValueContainer("Metrics Selected: "),
                Option: getCheckboxOption(),
                DropdownIndicator: getDropdownIndicator(),
                IndicatorsContainer: getIndicatorsContainer(),
              }}
            />
          )}
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
