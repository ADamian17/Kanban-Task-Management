import { useEffect } from "react";

import { useSelectCtx } from "../context/Select.provider";
import SelectListItem, { SelectListItemType } from "../SelectListItem";

import styles from "./SelectList.module.scss";

type SelectListType = {
  options: Pick<SelectListItemType, "label" | "value">[];
};

const SelectList: React.FC<SelectListType> = ({ options }) => {
  const { handleCloseList, isOpen, menuRef, handleMenuKeyUp } = useSelectCtx();

  useEffect(() => {
    document.addEventListener("click", handleCloseList);

    return () => {
      document.removeEventListener("click", handleCloseList);
    };
  }, [handleCloseList]);

  return (
    <menu
      ref={menuRef}
      className={`${styles.selectList} ${isOpen && styles.isOpen}`}
      onKeyUp={handleMenuKeyUp}
    >
      {options.length > 0 ? (
        options.map((item, idx) => (
          <SelectListItem key={item.value} idx={idx} value={item.value} label={item.label} />
        ))
      ) : (
        <li className={styles.listItem}>No options</li>
      )}
    </menu>
  );
};

export default SelectList;
