import React from "react";

import Select from "../Select";

import styles from "./SelectField.module.scss";

type SelectFieldProps = {
  label: string;
  options: Array<Record<"label" | "value", string>>;
  placeholder?: string;
  onChange?: (value: Select.Context["inputValue"]) => void;
};

const SelectField: React.FC<SelectFieldProps> = ({ options, placeholder, label, onChange }) => (
  <div className={styles.selectWrapper}>
    <label className={styles.label}>{label}</label>

    <Select options={options ?? []} placeholder={placeholder} onChange={onChange} />
  </div>
);

export default SelectField;
