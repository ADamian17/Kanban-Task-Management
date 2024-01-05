import Image from "next/image";

import Button from "@/components/UI/Button";
import KebabDropdown from "@/components/UI/Dropdowns/KebabDropdown";
import MobileSelectBoard from "@/components/MobileSelectBoard";

import styles from "./DashboardHeader.module.scss";
import { KebabMenuItem } from "@/utils/kebabMenuItem";
import ModalTriggerWithChevron from "@/components/ModalTriggerWithChevron";

const DashboardHeader = ({ boardName = "" }: { boardName: string }) => {
  const kebabMenuItems = [
    { ...new KebabMenuItem("edit board") },
    { ...new KebabMenuItem("delete board", true) },
  ];

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

          <ModalTriggerWithChevron />
        </figcaption>
      </figure>

      <Button className={styles.cta} disabled>
        <svg>
          <use href="/icons/icons-defs.svg#plus"></use>
        </svg>

        <span>Add new Task</span>
      </Button>

      <KebabDropdown menuItems={kebabMenuItems} />
    </header>
  );
}

export default DashboardHeader;
