import React, { ComponentProps } from "react";

import Input from "../Input";

import styles from "./TextField.module.scss";

type TextFieldType = ComponentProps<"input"> & {
  label: string;
  error?: string;
};

const TextField: React.FC<TextFieldType> = ({ label, placeholder, error, ...rest }) => {
  const hasError = typeof error !== "undefined" && error !== "";

  return (
    <fieldset className={`${styles.textFieldWrapper} ${hasError && styles.error}`}>
      <label className={styles.label}>{label}</label>

      <Input type="text" placeholder={placeholder} className={styles.input} {...rest} />

      {hasError && <p className={styles.errorMsg}>{error}</p>}
    </fieldset>
  );
};

export default TextField;
