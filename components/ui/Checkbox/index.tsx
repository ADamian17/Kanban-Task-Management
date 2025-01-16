import React, { ComponentProps } from "react";

import styles from "./Checkbox.module.scss";

type CheckboxType = ComponentProps<"input"> & {
  text: string;
};

const Checkbox: React.FC<CheckboxType> = ({ text, id, ...rest }) => {
  return (
    <fieldset className={styles.checkboxWrapper} data-testid="checkbox">
      <input type="checkbox" id={id} className={styles.input} {...rest} />

      <label htmlFor={id} className={styles.label}>
        <svg
          className={styles.checkboxIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
        >
          <path
            d="M1.27588 3.06593L4.03234 5.82239L9.03234 0.822388"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </label>

      <p className={styles.text}>{text}</p>
    </fieldset>
  );
};

export default Checkbox;
