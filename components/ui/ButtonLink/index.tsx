import React from "react";
import Link from "next/link";

import styles from "./ButtonLink.module.scss";

type ButtonType = React.ComponentProps<"a"> & {
  size?: "sm" | "md" | "lg" | "xl";
  text: string;
  variant?: "primary" | "secondary" | "danger";
  href: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
};

const ButtonLink: React.FC<ButtonType> = ({
  className,
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
    className={`${styles.btn} ${styles[size]} ${styles[variant]} ${className}`}
    {...rest}
  >
    {leftIcon ? leftIcon : null}
    {text}
    {rightIcon ? rightIcon : null}
  </Link>
);

export default ButtonLink;
