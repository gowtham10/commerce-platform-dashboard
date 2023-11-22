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
import { useState } from "react";

export function ProductPerformance(props: ProductProps) {
  const { cards, metricDetails } = props;

  const [filters, setFilters] = useState({
    startDate: new Date(),
    endDate: new Date(),
    categories: [],
  } as any);
  const [selectedCategories, setSelectedCategories] = useState([] as any[]);

  const handleDateChange = (startDate: Date, endDate: Date) => (setFilters({...filters, startDate, endDate}));

  const handleCategorySelection = (selectedOptions: any) => {
    const updatedCategories = selectedOptions?.map((selectedOption: any) => selectedOption?.value);
    setSelectedCategories(updatedCategories);
    setFilters({...filters, categories: updatedCategories});
  }

  return (
    <section className={styles["products"]}>
      <div className={styles["products__header"]}>
        <div>
          <PageHeader title="Product Performance" />
        </div>
        <div className={styles["products__filters"]}>
          <SimpleControlSelect
            options={[{label: "Electronics", value: "Electronics"}]}
            initialSelectedOptions={[]}
            handleSelection={handleCategorySelection}
            customComponents={{
              ValueContainer: getValueContainer("Categories Selected: "),
              Option: getCheckboxOption(),
              IndicatorsContainer: getIndicatorsContainer(),
              DropdownIndicator: getDropdownIndicator(),
            }}
          />
          <RangeDatePicker handleDateChange={handleDateChange} />
        </div>
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
