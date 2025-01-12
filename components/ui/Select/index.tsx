import SelectInput from "./SelectInput";
import SelectList from "./SelectList";
import SelectProvider from "./context/Select.provider";

import styles from "./Select.module.scss";
import { SelectListItemType } from "./SelectListItem";

type SelectType = {
  options: Pick<SelectListItemType, "label" | "value">[]
  placeholder?: string
}

const Select: React.FC<SelectType> = ({ options = [], placeholder }) => (
  <SelectProvider optionsCount={options.length}>
    <div className={styles.selectWrapper}>
      <SelectInput placeholder={placeholder} />

      <SelectList options={options} />
    </div>
  </SelectProvider>
);

export default Select;
