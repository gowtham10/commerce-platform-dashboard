"use client";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import styles from "./date-picker.module.scss";

export interface DatePickerProps {
  startDate?: Date;
  endDate?: Date;
  handleDateChange?: (startDate: Date, endDate: Date) => void;
}

export function DatePicker(props: any) {
  const { startDate = new Date(), endDate = new Date(), handleDateChange } = props;

  const [state, setState] = useState([
    {
      startDate,
      endDate,
      key: "selection",
    },
  ]);

  const handleSelection = (item: any) => {
    console.log(item, "item");
    setState([item.selection]);
    handleDateChange &&
      handleDateChange(item.selection.startDate, item.selection.endDate);
  };

  return (
    <DateRangePicker
      months={1}
      ranges={state}
      maxDate={new Date()}
      onChange={handleSelection}
      showDateDisplay={false}
      className={styles.picker}
    />
  );
}
