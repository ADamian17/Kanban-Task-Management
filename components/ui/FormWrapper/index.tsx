import React, { ComponentProps } from "react";

import styles from "./FormWrapper.module.scss";

const FormWrapper: React.FC<ComponentProps<"form">> = ({ className, children, ...rest }) => {
  return (
    <form className={`${styles.formWrapper} ${className}`} {...rest}>
      {children}
    </form>
  );
};

export default FormWrapper;
