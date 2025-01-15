import ChevronDown from "@/components/icons/ChevronDown";
import { useSelectCtx } from "../context/Select.provider";

import styles from "./SelectInput.module.scss";
import { ComponentProps } from "react";

interface SelectInputProps extends Omit<ComponentProps<"input">, "value"> {
  value: Record<"label" | "value", string>;
}

const SelectInput: React.FC<SelectInputProps> = ({ placeholder, value, ...rest }) => {
  const { handleOpenList, inputRef, inputValue, handleInputKeyUp, isOpen } = useSelectCtx();
  return (
    <div className={styles.selectInputWrapper}>
      <input
        className={`${styles.selectInput} ${isOpen && styles.isOpen}`}
        id="select-input"
        onClick={handleOpenList}
        onKeyUp={handleInputKeyUp}
        placeholder={placeholder}
        readOnly
        ref={inputRef}
        type="text"
        value={value?.label || inputValue.label}
        {...rest}
      />

      <ChevronDown className={styles.selectIcon} />
    </div>
  );
};

export default SelectInput;
