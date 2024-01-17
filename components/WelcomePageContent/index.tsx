import Link from "next/link";

import styles from "./WelcomePageContent.module.scss";

const WelcomePageContent = () => (
  <main className={styles.mainWrapper}>
    <div className={styles.content}>
      <h1>Kanban task management web app</h1>

      <p className={styles.copy}>
        Welcome to our innovative demo app, crafted in response to Frontend Mentor{"'"}s challenge. Inspired by their Kanban challenge, our task management application is a fully-functional solution designed for the Next JS framework. Boasting a dynamic interface, customizable features, and a convenient light/dark mode toggle, users can effortlessly organize tasks. Seamlessly integrating with Next JS, our app not only meets but exceeds Frontend Mentor{"'"}s challenge. In this new era of task management, efficiency meets creativity in a sleek and adaptable package.

        Empowering users with creative freedom, our platform allows them to bring their ideas to life by creating <b>up to three instances of each feature</b>, fostering innovation within resource constraints. Experience a powerful blend of functionality and flexibility, redefining how tasks are managed in a world of limitless possibilities.
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
