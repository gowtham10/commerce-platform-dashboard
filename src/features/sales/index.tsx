"use client";
import { PageHeader } from "@/components/page-header";
import styles from "./sales.module.scss";
import { Card } from "@/components/card";
import { SalesProps } from "./sales.interface";
import { MetricContainer } from "../dashboard/dashboard__metric-container";
import { RangeDatePicker } from "@/components/date-picker/range-date-picker";
import { useState } from "react";

export function SalesOverview(props: SalesProps) {
  const { cards, metricDetails } = props;

  const [filters, setFilters] = useState({
    startDate: new Date(),
    endDate: new Date(),
  } as any);

  const handleDateChange = (startDate: Date, endDate: Date) => {
    setFilters({ startDate, endDate });
  };

  return (
    <section className={styles["sales"]}>
      <div className={styles["sales__header"]}>
        <div>
          <PageHeader title="Sales Overview" />
        </div>
        <div>
          <RangeDatePicker handleDateChange={handleDateChange} />
        </div>
      </div>
      <div className={styles["sales__content"]}>
        <div className={styles["sales__row"]}>
          <Card filters={filters} {...cards} />
        </div>
        <div className={styles["sales__row"]}>
          {metricDetails.map((metricDetail) => {
            const { key, ...rest } = metricDetail;
            return <MetricContainer key={key} filters={filters} {...rest} />;
          })}
        </div>
      </div>
    </section>
  );
}
