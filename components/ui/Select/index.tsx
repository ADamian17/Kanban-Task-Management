import SelectInput from "./SelectInput";
import SelectList from "./SelectList";
import SelectProvider from "./context/Select.provider";

import styles from "./Select.module.scss";

type SelectType = {
  onChange?: (value: Select.Context["inputValue"]) => void;
  options: Select.Context["inputValue"][];
  placeholder?: string;
};

const Select: React.FC<SelectType> = ({ options = [], placeholder, onChange }) => (
  <SelectProvider optionsCount={options.length} onChange={onChange}>
    <div className={styles.selectWrapper}>
      <SelectInput placeholder={placeholder} />

      <SelectList options={options} />
    </div>
  </SelectProvider>
);

export default Select;
