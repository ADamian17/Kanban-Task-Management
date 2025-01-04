import React from "react";

import styles from "./Checkbox.module.scss";

type CheckboxType = {
  text: string;
};

const Checkbox: React.FC<CheckboxType> = ({ text }) => {
  return (
    <fieldset className={styles.checkboxWrapper} data-testid="checkbox">
      <input type="checkbox" id="checkbox" className={styles.input} />
      <label htmlFor="checkbox" className={styles.label}>
        <svg className={styles.checkboxIcon} xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1.27588 3.06593L4.03234 5.82239L9.03234 0.822388" stroke="white" stroke-width="2" />
        </svg>
      </label>

      <p className={styles.text}>{text}</p>
    </fieldset>
  )
};

export default Checkbox;