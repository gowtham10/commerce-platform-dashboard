"use client";
import { PageHeader } from "@/components/page-header";
import styles from "./sales.module.scss";
import { Card } from "@/components/card";
import { SalesProps } from "./sales.interface";
import { MetricContainer } from "../dashboard/dashboard__metric-container";
import { RangeDatePicker } from "@/components/date-picker/range-date-picker";
import { useEffect, useState } from "react";
import { formatDate, getItem, setItem } from "@/helpers";
import { LocalStorageKeys } from "@/constants/localstorage-keys";

export function SalesOverview(props: SalesProps) {
  const { cards, metricDetails } = props;

  const [filters, setFilters] = useState({
    startDate: new Date(),
    endDate: new Date(),
  } as any);
  const [showFilters, setShowFilters] = useState(false);

  const handleDateChange = (startDate: Date, endDate: Date) => {
    setFilters({ startDate, endDate });
    setItem(LocalStorageKeys.SALES_START_DATE, formatDate(startDate));
    setItem(LocalStorageKeys.SALES_END_DATE, formatDate(endDate));
  };

  useEffect(() => {
    const storedStartDate = getItem(LocalStorageKeys.SALES_START_DATE);
    const storedEndDate = getItem(LocalStorageKeys.SALES_END_DATE);

    if (storedStartDate && storedEndDate) {
      const formattedStartDate = new Date(storedStartDate);
      const formattedEndDate = new Date(storedEndDate);
      setFilters({ startDate: formattedStartDate, endDate: formattedEndDate });
    }
    setShowFilters(true);
  }, []);

  return (
    <section className={styles["sales"]}>
      <div className={styles["sales__header"]}>
        <div>
          <PageHeader title="Sales Overview" />
        </div>
        <div>
          {showFilters &&
            (
              <RangeDatePicker
                handleDateChange={handleDateChange}
                initialStartDate={filters?.startDate}
                initialEndDate={filters?.endDate}
              />
            )}
        </div>
      </div>
      <div className={styles["sales__content"]}>
        <div className={styles["sales__row"]}>
          <Card skeletonCount={6} filters={filters} {...cards} />
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
