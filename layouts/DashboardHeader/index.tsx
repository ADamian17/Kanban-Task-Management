import Image from "next/image";

import Button from "@/components/UI/Button";
import KebabDropdown from "@/components/UI/Dropdowns/KebabDropdown";
import MobileSelectBoard from "@/components/MobileSelectBoard";

import styles from "./DashboardHeader.module.scss";

const DashboardHeader = ({ boardName = "" }: { boardName: string }) => {
  return (
    <header className={styles.dashboardHeader}>
      <figure className={styles.logo}>
        <Image
          src="/icons/kanban-mobile.svg"
          width="24"
          height="25"
          alt='kanban icon'
        />

        <figcaption className={styles.headline}>
          <h2>{boardName}</h2>

          <MobileSelectBoard />
        </figcaption>
      </figure>

      <Button className={styles.cta} disabled>
        <svg>
          <use href="/icons/icons-defs.svg#plus"></use>
        </svg>

        <span>Add new Task</span>
      </Button>

      <KebabDropdown>
        he
      </KebabDropdown>
    </header>
  );
}

export default DashboardHeader;
