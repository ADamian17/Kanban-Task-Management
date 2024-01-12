import Image from "next/image";

import { KebabMenuItem } from "@/utils/kebabMenuItem";
import Button from "@/components/UI/Button";
import KebabDropdown from "@/components/UI/Dropdowns/KebabDropdown";
import ModalTriggerWithChevron from "@/components/ModalTriggerWithChevron";

import styles from "./DashboardHeader.module.scss";

const DashboardHeader = ({ boardName = "", pathname = "" }: { boardName: string, pathname: string }) => {
  const kebabMenuItems = [
    { ...new KebabMenuItem("edit board", `/dashboard/edit-board/${pathname}`) },
    { ...new KebabMenuItem("delete board", `/dashboard/delete-board/${pathname}`, true) },
  ];

  console.log(pathname);

  return (
    <header className={styles.dashboardHeader}>
      <figure className={styles.logo}>
        <Image
          src="/icons/kanban-mobile.svg"
          width="24"
          height="25"
          alt='kanban icon'
        />

        {
          boardName && (
            <figcaption className={styles.headline}>
              <h2>{boardName}</h2>

              <ModalTriggerWithChevron />
            </figcaption>
          )
        }
      </figure>

      <Button className={styles.cta} disabled>
        <svg>
          <use href="/icons/icons-defs.svg#plus"></use>
        </svg>

        <span>Add new Task</span>
      </Button>
      {
        pathname && <KebabDropdown menuItems={kebabMenuItems} />
      }
    </header>
  );
}

export default DashboardHeader;
