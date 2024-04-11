import { ReactNode, FC, ComponentProps } from "react";

import styles from "./ButtonsGroup.module.scss";

type ButtonType = {
  children: ReactNode
  className?: string;
};

const ButtonsGroup: FC<ButtonType> = ({ children, className }) => {
  return <div className={`${styles.group} ${className}`}>{children}</div>
};

export default ButtonsGroup;