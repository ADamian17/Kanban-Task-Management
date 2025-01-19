import React, { ComponentProps, MouseEventHandler } from "react";

import Cross from "@/components/icons/Cross";
import Input from "../Input";

import styles from "./InputFieldWithRemoveIcon.module.scss";

type InputFieldWithRemoveIconType = ComponentProps<"input"> & {
  error?: string;
  onRemove?: MouseEventHandler<SVGSVGElement>;
  placeholder?: string;
};

const InputFieldWithRemoveIcon: React.FC<InputFieldWithRemoveIconType> = ({
  placeholder,
  onRemove,
  error,
  ...rest
}) => {
  const hasError = typeof error !== "undefined" && error !== "";

  return (
    <div className={`${styles.wrapper} ${hasError && styles.error}`}>
      <Input placeholder={placeholder} className={styles.input} {...rest} />
      <Cross onClick={onRemove} className={styles.icon} />

      <p className={styles.errorMsg}>{error}</p>
    </div>
  );
};

export default InputFieldWithRemoveIcon;
