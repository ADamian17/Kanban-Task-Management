import { ReactNode, FC, DetailedHTMLProps, ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

type ButtonType = {
  children: ReactNode
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: FC<ButtonType> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>
};

export default Button;