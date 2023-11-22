import { components } from "react-select";
import { Children, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import styles from "./select.module.scss";

export function getValueContainer(selectText: string) {
  return function ValueContainer(
    { children, getValue, getStyles, options, ...props }: any,
  ) {
    var length = getValue().length;

    return (
      <components.ValueContainer {...props} getStyles={getStyles}>
        {!props.selectProps.inputValue &&
          `${selectText} ${length} / ${options?.length}`}
        {Children.map(children, (child) => {
          return child.type === components.Input ? child : null;
        })}
      </components.ValueContainer>
    );
  };
}

export function getCheckboxOption() {
  return function Option({
    getStyles,
    Icon,
    isDisabled,
    isFocused,
    isSelected,
    children,
    innerProps,
    ...rest
  }: any) {
    const [isActive, setIsActive] = useState(false);
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    const onMouseLeave = () => setIsActive(false);

    // styles
    let bg = "transparent";
    if (isFocused) bg = "#eee";
    if (isActive) bg = "#B2D4FF";

    const style = {
      alignItems: "center",
      backgroundColor: bg,
      color: "inherit",
      display: "flex ",
      gap: "10px",
      cursor: "pointer",
    };

    // prop assignment
    const props = {
      ...innerProps,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      style,
    };

    return (
      <components.Option
        {...rest}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isSelected={isSelected}
        getStyles={getStyles}
        innerProps={props}
      >
        <input type="checkbox" checked={isSelected} />
        {children}
      </components.Option>
    );
  };
}

export function getDropdownIndicator() {
  return function DropdownIndicator(
    props: any,
  ) {
    return (
      <components.DropdownIndicator {...props}>
        <ChevronDownIcon color="#535353" width={20} height={20} />
      </components.DropdownIndicator>
    );
  };
}

export function getIndicatorsContainer() {
  return function IndicatorsContainer(
    props: any,
  ) {
    return (
      <div className={styles["indicators-container"]}>
        <components.IndicatorsContainer {...props} />
      </div>
    );
  };
}
