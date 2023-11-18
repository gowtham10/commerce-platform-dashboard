"use client";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export interface DatePickerProps {
  startDate?: Date;
  endDate?: Date;
  handleDateChange?: (startDate: Date, endDate: Date) => void;
}

export function DatePicker(props: any) {
  const { startDate = new Date(), endDate = new Date(), handleDateChange } = props;

  const [selectionRange, setSelectionRange] = useState({
    startDate,
    endDate,
    key: "selection",
  });

  const handleSelection = (range: any) => {
    console.log(range);
    setSelectionRange(
      {
        ...selectionRange,
        ...range,
      },
    );
    handleDateChange && handleDateChange(range.startDate, range.endDate);
  };

  return (
    <DateRangePicker
      months={1}
      ranges={[selectionRange]}
      onChange={handleSelection}
      showDateDisplay={false}
    />
  );
}
