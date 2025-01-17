import React, { ComponentProps } from "react";

import styles from "./Input.module.scss";

const Input: React.FC<ComponentProps<"input">> = ({ className, ...rest }) => {
  return <input className={`${styles.input} ${className}`} {...rest} />;
};

export default Input;
