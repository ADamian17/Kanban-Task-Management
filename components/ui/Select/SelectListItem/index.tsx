import { ComponentRef, useEffect } from "react";

import { useSelectCtx } from "../context/Select.provider";

import styles from './SelectListItem.module.scss';
import { useFocus } from "@/lib/hooks/useFocus";

export type SelectListItemType = {
  idx: number;
  label: string;
  value: string
}

const SelectListItem: React.FC<SelectListItemType> = ({ idx, label, value }) => {
  const [liRef, setLiFocus] = useFocus<ComponentRef<"li">>();
  const { tabIndex, handleSetInputValue } = useSelectCtx();

  useEffect(() => {
    if (liRef.current?.tabIndex === tabIndex) {
      setLiFocus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liRef, liRef.current?.tabIndex, tabIndex]);

  return (
    <li
      className={styles.listItem}
      onClick={handleSetInputValue}
      ref={liRef}
      role="presentation"
      tabIndex={idx + 1}
      data-opt={JSON.stringify({ label, value })}
    >
      <p className={styles.label}>{label}</p>
    </li>
  );
}

export default SelectListItem;
