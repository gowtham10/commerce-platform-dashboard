"use client";
import { PageHeader } from "@/components/page-header";
import styles from "./customers.module.scss";
import { Card } from "@/components/card";
import { MetricContainer } from "../dashboard/dashboard__metric-container";
import { CustomerProps } from "./customers.interface";
import { RangeDatePicker } from "@/components/date-picker/range-date-picker";
import { useState } from "react";

export function CustomerAnalytics(props: CustomerProps) {
  const { cards, metricDetails } = props;

  const [filters, setFilters] = useState({
    startDate: new Date(),
    endDate: new Date(),
  } as any);

  const handleDateChange = (startDate: Date, endDate: Date) => {
    setFilters({ startDate, endDate });
  };

  return (
    <section className={styles["customers"]}>
      <div className={styles["customers__header"]}>
        <div>
          <PageHeader title="Customer Analytics" />
        </div>
        <div>
          <RangeDatePicker handleDateChange={handleDateChange} />
        </div>
      </div>
      <div className={styles["customers__content"]}>
        <div className={styles["customers__row"]}>
          <Card filters={filters} {...cards} />
        </div>
        <div className={styles["customers__row"]}>
          {metricDetails.map((metricDetail) => {
            const { key, ...rest } = metricDetail;
            return <MetricContainer key={key} filters={filters} {...rest} />;
          })}
        </div>
      </div>
    </section>
  );
}
