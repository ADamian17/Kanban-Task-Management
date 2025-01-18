import React from "react";
import Link from "next/link";

import styles from "./ButtonLink.module.scss";

type ButtonType = React.ComponentProps<"a"> & {
  disabled?: boolean;
  href: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  text: string;
  variant?: "primary" | "secondary" | "danger";
};

const ButtonLink: React.FC<ButtonType> = ({
  className,
  disabled = false,
  href,
  leftIcon,
  rightIcon,
  size = "md",
  text,
  variant = "primary",
  ...rest
}) => (
  <Link
    href={href}
    className={`${styles.btn} ${styles[size]} ${styles[variant]} ${disabled && styles.disabled} ${className}`}
    {...rest}
  >
    {leftIcon ? leftIcon : null}
    {text}
    {rightIcon ? rightIcon : null}
  </Link>
);

export default ButtonLink;
