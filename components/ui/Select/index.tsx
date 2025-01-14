import SelectInput from "./SelectInput";
import SelectList from "./SelectList";
import SelectProvider from "./context/Select.provider";

import styles from "./Select.module.scss";
import { ComponentProps } from "react";

type SelectType = Omit<ComponentProps<"input">, "onChange"> & {
  onChange?: (value: Select.Context["inputValue"]) => void;
  options: Select.Context["inputValue"][];
  placeholder?: string;
};

const Select: React.FC<SelectType> = ({ options = [], placeholder, onChange, ...rest }) => (
  <SelectProvider optionsCount={options.length} onChange={onChange}>
    <div className={styles.selectWrapper}>
      <SelectInput placeholder={placeholder} {...rest} />

      <SelectList options={options} />
    </div>
  </SelectProvider>
);

export default Select;
