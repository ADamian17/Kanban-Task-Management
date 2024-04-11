import { ReactNode } from "react";

import styles from "./FormContentWrapper.module.scss";

type FormContentWrapperType = {
  children: ReactNode,
  headline: string;
};

const FormContentWrapper: React.FC<FormContentWrapperType> = ({ headline, children }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.headline}>{headline}</h2>

    {children}
  </div>
);

export default FormContentWrapper;