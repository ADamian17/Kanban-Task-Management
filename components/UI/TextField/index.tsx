"use client";
import { ChangeEvent, ChangeEventHandler, ComponentProps, FocusEvent, FocusEventHandler, useEffect, useRef, useState } from "react";

import styles from "./TextField.module.scss";

type TextFieldProps = {
  error: boolean
} & ComponentProps<"input">

const TextField = ({ error, ...rest }: TextFieldProps) => {
  return (
    <div className={`${styles.textFieldWrapper} ${error && styles.error}`}>
      <input
        className={styles.input}
        type="text"
        {...rest}
      />
    </div>
  )
}

export default TextField;
