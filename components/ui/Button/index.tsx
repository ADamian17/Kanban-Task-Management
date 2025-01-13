import React from "react";

import styles from "./Button.module.scss";

type ButtonType = React.ComponentProps<"button"> & {
  size?: "sm" | "md" | "lg" | "xl";
  text: string;
  variant?: "primary" | "secondary" | "danger";
};

const Button: React.FC<ButtonType> = ({
  text,
  className,
  size = "md",
  variant = "primary",
  ...rest
}) => (
  <button className={`${styles.btn} ${styles[size]} ${styles[variant]} ${className}`} {...rest}>
    {text}
  </button>
);

export default Button;
