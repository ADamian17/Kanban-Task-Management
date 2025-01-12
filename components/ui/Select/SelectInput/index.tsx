import ChevronDown from "@/components/icons/ChevronDown";
import { useSelectCtx } from "../context/Select.provider";

import styles from './SelectInput.module.scss';

type SelectListType = {
  placeholder?: string;
}

const SelectInput: React.FC<SelectListType> = ({ placeholder }) => {
  const { handleOpenList, inputRef, inputValue, handleInputKeyUp, isOpen } = useSelectCtx();

  return (
    <div className={styles.selectInputWrapper}>
      <input
        onClick={handleOpenList}
        onKeyUp={handleInputKeyUp}
        className={`${styles.selectInput} ${isOpen && styles.isOpen}`}
        id="select-input"
        readOnly
        ref={inputRef}
        type="text"
        value={inputValue.label}
        placeholder={placeholder}
      />

      <ChevronDown className={styles.selectIcon} />
    </div>
  );
}

export default SelectInput;
