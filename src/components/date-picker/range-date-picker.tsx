"use client";
import { useState } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import { DatePicker } from "./index";
import { formatDate } from "@/helpers";
import styles from "./date-picker.module.scss";

export interface RangeDatePickerProps {
  handleDateChange?: (startDate: Date, endDate: Date) => void;
}

export function RangeDatePicker(props: RangeDatePickerProps) {
  const { handleDateChange } = props;

  const [showPicker, setShowPicker] = useState(false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const handleRangePickerChange = (startDate: Date, endDate: Date) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const togglePicker = () => setShowPicker(!showPicker);

  const handleToggle = () => {
    if (showPicker && handleDateChange) {
      handleDateChange(startDate, endDate);
    }
    togglePicker();
  };

  return (
    <div className={styles["container"]} >
      <ClockIcon width={25} height={25} onClick={handleToggle}/>
      <div className={styles["container__date-range"]} onClick={handleToggle}>
        <span>{formatDate(startDate)}</span>
        <span>-</span>
        <span>{formatDate(endDate)}</span>
      </div>
      {showPicker &&
        (
          <div className={styles["picker__container"]}>
            <DatePicker startDate={startDate} endDate={endDate} handleDateChange={handleRangePickerChange} />
          </div>
        )}
    </div>
  );
}
