"use client";
import { Children, useState } from "react";
import Select, { components } from "react-select";

export interface SimpleControlSelectProps {
  initialSelectedOptions?: any;
  handleSelection?: (selectedOptions: any) => void;
  customComponents?: any;
  options: any;
  isSearchable?: boolean;
  isClearable?: boolean;
}

export function SimpleControlSelect(props: SimpleControlSelectProps) {
  const {
    options,
    initialSelectedOptions,
    handleSelection,
    customComponents = {},
    isSearchable = false,
    isClearable = false,
  } = props;
  const [selectedOptions, setSelectedOptions] = useState(
    initialSelectedOptions,
  );

  const handleChange = (selectedOptions: any) => {
    setSelectedOptions(selectedOptions);
    handleSelection && handleSelection(selectedOptions);
  };

  const colourStyles = {
    control: (styles: any, state: any) => ({
      ...styles,
      backgroundColor: "#F7F7F7",
      border: state.isFocused ? "none" : "none",
      cursor: "pointer",
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? "none" : "none",
      }
    }),
  };

  return (
    <Select
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      onChange={(options) => {
        if (Array.isArray(options)) {
          setSelectedOptions(options.map((opt) => opt.value));
        }
        handleChange(options);
      }}
      isClearable={isClearable}
      isSearchable={isSearchable}
      defaultValue={selectedOptions}
      isMulti
      name="colors"
      options={options}
      controlShouldRenderValue={true}
      components={customComponents}
      styles={colourStyles}
    />
  );
}
