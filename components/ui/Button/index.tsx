import React from "react";

import styles from "./Button.module.scss";

type ButtonType = {
  text: string;
};

const Button: React.FC<ButtonType> = ({ text }) => {
  return <button className={styles.btn}>{text}</button>
};

export default Button;