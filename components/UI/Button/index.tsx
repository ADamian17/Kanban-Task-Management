import { ReactNode, FC, ComponentProps } from "react";

import styles from "./Button.module.scss";

type ButtonType = {
  children: ReactNode
  variant?: "primary" | "secondary" | "destructive"
};

const Button: FC<ButtonType & ComponentProps<"button">> = ({ children, className, variant = "primary", ...rest }) => {
  return <button className={`${styles.btn} ${variant && styles[variant]} ${className}`} {...rest}>{children}</button>
};

export default Button;