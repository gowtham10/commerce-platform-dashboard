"use client";
import { PageHeader } from "@/components/page-header";
import styles from "./customers.module.scss";
import { Card } from "@/components/card";
import { MetricContainer } from "../dashboard/dashboard__metric-container";
import { CustomerProps } from "./customers.interface";
import { RangeDatePicker } from "@/components/date-picker/range-date-picker";
import { useEffect, useState } from "react";
import { formatDate, getItem, setItem } from "@/helpers";
import { LocalStorageKeys } from "@/constants/localstorage-keys";

export function CustomerAnalytics(props: CustomerProps) {
  const { cards, metricDetails } = props;

  const [filters, setFilters] = useState({
    startDate: new Date(),
    endDate: new Date(),
  } as any);
  const [showFilters, setShowFilters] = useState(false);

  const handleDateChange = (startDate: Date, endDate: Date) => {
    setFilters({ startDate, endDate });
    setItem(LocalStorageKeys.CUSTOMERS_START_DATE, formatDate(startDate));
    setItem(LocalStorageKeys.CUSTOMERS_END_DATE, formatDate(endDate));
  };

  useEffect(() => {
    const storedStartDate = getItem(LocalStorageKeys.CUSTOMERS_START_DATE);
    const storedEndDate = getItem(LocalStorageKeys.CUSTOMERS_END_DATE);

    if (storedStartDate && storedEndDate) {
      const formattedStartDate = new Date(storedStartDate);
      const formattedEndDate = new Date(storedEndDate);
      setFilters({ startDate: formattedStartDate, endDate: formattedEndDate });
    }
    setShowFilters(true);
  }, []);

  return (
    <section className={styles["customers"]}>
      <div className={styles["customers__header"]}>
        <div>
          <PageHeader title="Customer Analytics" />
        </div>
        {showFilters &&
          (
            <div data-test-id="filters">
              <RangeDatePicker
                initialStartDate={filters.startDate}
                initialEndDate={filters.endDate}
                handleDateChange={handleDateChange}
              />
            </div>
          )}
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
