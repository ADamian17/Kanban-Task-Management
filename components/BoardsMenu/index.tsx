"use server"
import { getBoards } from "@/utils/getBoards";
import BoardsMenuItem from "./BoardsMenuItem";
import Modal from "../UI/Modal";

import styles from "./BoardsMenu.module.scss"

const BoardsMenu = async () => {
  const data = await getBoards()
  const boardCount = data?.boards?.length

  const boardList = data?.boards && data?.boards.map(board => (
    <BoardsMenuItem
      key={`${board?.id} ${board?.name}`}
      name={board?.name}
      uri={board?.uri}
    />
  ))

  return (
    <div className={styles.boardContainer}>
      <p className={styles.headline}>all boards ({boardCount})</p>

      <ul className={styles.boardList}>
        {boardList}

        <li className={styles.boardItem}>
          {/* <Modal>
            <Modal.Trigger>
              <h3 className={`${styles.copy} ${styles.withPurpleText}`}>
                <svg>
                  <use href={`/icons/icons-defs.svg#board`}></use>
                </svg>

                + Create New Board
              </h3>
            </Modal.Trigger>

            <Modal.Content>
              hello
            </Modal.Content>
          </Modal> */}
        </li>
      </ul>
    </div>
  );
}

export default BoardsMenu;
