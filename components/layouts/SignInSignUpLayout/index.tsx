import React from "react";
import Link from "next/link";

import styles from "./SignInSignUpLayout.module.scss";

type SignInSignUpWrapperType = {
  children: React.ReactNode;
  title: string;
  linkInfo: Record<"copy" | "path" | "text", string>;
};

const SignInSignUpLayout: React.FC<SignInSignUpWrapperType> = ({ children, linkInfo, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} />

      <div className={styles.formWrapper}>
        <h2 className={styles.title}>
          {title}
        </h2>

        {children}

        <div className={styles.copyWrapper}>
          {linkInfo?.copy}{' '}

          <Link href={linkInfo?.path ?? ""}>
            {linkInfo?.text}
          </Link>
        </div>
      </div>
    </div>
  )
};

export default SignInSignUpLayout;
