import Link from "next/link";

import styles from "./EmptyBoard.module.scss";

const EmptyBoard = ({ slug }: { slug: string }) => (
  <div className={styles.container}>
    <h2>This board is empty. Create a new column to get started.</h2>

    <Link href={`/dashboard/${slug}/add-column`} className={styles.cta}>+ Add New Column</Link>
  </div>
);

export default EmptyBoard;
