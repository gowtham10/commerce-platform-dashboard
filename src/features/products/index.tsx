"use client";
import { PageHeader } from "@/components/page-header";
import styles from "./products.module.scss";
import { Card } from "@/components/card";
import { MetricContainer } from "../dashboard/dashboard__metric-container";
import { ProductProps } from "./products.interface";
import { SimpleControlSelect } from "@/components/select/simple-control-select";
import {
  getCheckboxOption,
  getDropdownIndicator,
  getIndicatorsContainer,
  getValueContainer,
} from "@/components/select/select-components";
import { RangeDatePicker } from "@/components/date-picker/range-date-picker";
import { useEffect, useState } from "react";
import { filterSelectedOptions, formatDate, getItem, getSelectedValues, setItem } from "@/helpers";
import { LocalStorageKeys } from "@/constants/localstorage-keys";

export function ProductPerformance(props: ProductProps) {
  const { cards, metricDetails, enabledCategories = [], allCategories= [{ label: "Electronics", value: "Electronics" }] } = props;

  const [filters, setFilters] = useState({
    startDate: new Date(),
    endDate: new Date(),
    categories: [],
  } as any);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const storedStartDate = getItem(LocalStorageKeys.PRODUCT_START_DATE);
    const storedEndDate = getItem(LocalStorageKeys.PRODUCT_END_DATE);
    const storedCategories = getItem(
      LocalStorageKeys.PRODUCTS_SELECTED_CATEGORY,
    );

    if (storedStartDate && storedEndDate) {
      const formattedStartDate = new Date(storedStartDate);
      const formattedEndDate = new Date(storedEndDate);
      setFilters({
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        categories: storedCategories?.split(",") || [],
      });
    }
    setShowFilters(true);
  }, []);

  const handleDateChange = (
    startDate: Date,
    endDate: Date,
  ) => {
    setFilters({ ...filters, startDate, endDate });
    setItem(LocalStorageKeys.CUSTOMERS_START_DATE, formatDate(startDate));
    setItem(LocalStorageKeys.CUSTOMERS_END_DATE, formatDate(endDate));
  };

  const handleCategorySelection = (selectedOptions: any) => {
    const updatedCategories = selectedOptions?.map((selectedOption: any) =>
      selectedOption?.value
    );
    setFilters({ ...filters, categories: updatedCategories });
    setItem(LocalStorageKeys.PRODUCTS_SELECTED_CATEGORY, updatedCategories);
  };

  return (
    <section className={styles["products"]}>
      <div className={styles["products__header"]}>
        <div>
          <PageHeader title="Product Performance" />
        </div>
        {showFilters &&
          (
            <div className={styles["products__filters"]}>
              <SimpleControlSelect
                options={allCategories}
                initialSelectedOptions={filterSelectedOptions(
                  allCategories,
                  getSelectedValues(
                    enabledCategories,
                    LocalStorageKeys?.PRODUCTS_SELECTED_CATEGORY,
                  ),
                )}
                handleSelection={handleCategorySelection}
                customComponents={{
                  ValueContainer: getValueContainer("Categories Selected: "),
                  Option: getCheckboxOption(),
                  IndicatorsContainer: getIndicatorsContainer(),
                  DropdownIndicator: getDropdownIndicator(),
                }}
              />
              <RangeDatePicker
                initialStartDate={filters?.startDate}
                initialEndDate={filters?.endDate}
                handleDateChange={handleDateChange}
              />
            </div>
          )}
      </div>
      <div className={styles["products__content"]}>
        <div className={styles["products__row"]}>
          <Card filters={filters} {...cards} />
        </div>
        <div className={styles["products__row"]}>
          {metricDetails.map((metricDetail) => {
            const { key, ...rest } = metricDetail;
            return <MetricContainer key={key} filters={filters} {...rest} />;
          })}
        </div>
      </div>
    </section>
  );
}
