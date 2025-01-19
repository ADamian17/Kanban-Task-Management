import React, { ComponentProps } from "react";

import Select from "../Select";

import styles from "./SelectField.module.scss";

type SelectFieldProps = Omit<ComponentProps<"input">, "onChange" | "value"> & {
  label: string;
  options: Array<Record<"label" | "value", string>>;
  placeholder?: string;
  onChange?: (value: Select.Context["inputValue"]) => void;
  value: Record<"label" | "value", string>;
};

const SelectField: React.FC<SelectFieldProps> = ({
  options,
  placeholder,
  label,
  onChange,
  ...rest
}) => (
  <div className={styles.selectWrapper}>
    <label className={styles.label}>{label}</label>

    <Select options={options ?? []} placeholder={placeholder} onChange={onChange} {...rest} />
  </div>
);

export default SelectField;
