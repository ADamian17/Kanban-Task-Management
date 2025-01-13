import React, { ComponentProps } from "react";

import styles from "./TextareaField.module.scss";

type TextareaFieldType = ComponentProps<"textarea"> & {
  label: string;
  placeholder?: string;
  error?: string;
};

const TextareaField: React.FC<TextareaFieldType> = ({ error, placeholder, label, ...rest }) => {
  const hasError = typeof error !== "undefined";

  return (
    <div className={`${styles.textareaWrapper} ${hasError && styles.error}`}>
      <label className={styles.label}>{label}</label>

      <textarea className={styles.textarea} placeholder={placeholder} rows={4} {...rest} />

      {hasError && <p className={styles.errorMsg}>{error}</p>}
    </div>
  );
};

export default TextareaField;
