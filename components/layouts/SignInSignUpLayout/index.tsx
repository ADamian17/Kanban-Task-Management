import React from "react";
import Link from "next/link";

import styles from "./SignInSignUpLayout.module.scss";

type SignInSignUpWrapperType = {
  children: React.ReactNode;
  title: string;
  linkInfo: Record<"copy" | "path" | "text", string>;
};

const SignInSignUpLayout: React.FC<SignInSignUpWrapperType> = ({ children, linkInfo, title }) => (
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

      <p className={styles.subcopy}>
        Discover our prototype task management app, inspired by Frontend Mentor&apos;s Kanban challenge. Powered by Next.js, it combines dynamic features with simplicity for efficient task management.
      </p>
    </div>
  </div>
)

export default SignInSignUpLayout;
