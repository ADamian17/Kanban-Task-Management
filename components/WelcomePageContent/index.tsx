import Link from "next/link";

import styles from "./WelcomePageContent.module.scss";

const WelcomePageContent = () => (
  <main className={styles.mainWrapper}>
    <div className={styles.content}>
      <h1>Kanban task management web app</h1>

      <p className={styles.copy}>
        Unveil elegance with our task management app, inspired by Frontend Mentor{`'`}s Kanban challenge. Next JS powered, it seamlessly blends dynamic features with simplicity. <b>Create up to three instances for each feature</b>, Experience a powerful blend of functionality and flexibility, redefining how tasks are managed in a world of limitless possibilities.
      </p>

      <Link href="/dashboard/" className={styles.cta}>
        Go to Dashboard
      </Link>

      <div className={styles.footerWrapper}>
        <Link href="https://www.adonismartin.com/" target="_blank">Adonis D. Martin</Link>

        <p>&copy; Copyright {new Date().getFullYear()}</p>
      </div>
    </div>
  </main>
)

export default WelcomePageContent;
