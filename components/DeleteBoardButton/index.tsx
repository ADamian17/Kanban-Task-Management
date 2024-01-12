import { deleteBoard } from "@/utils/board/deleteBoard";
import Button from "../UI/Button";
import styles from "./DeleteBoardButton.module.scss"

type DeleteBoardButtonType = {
  boardId: string | number | null
};

const DeleteBoardButton: React.FC<DeleteBoardButtonType> = ({ boardId }) => (
  <form action={deleteBoard} className={styles.wrapper}>
    <input type="hidden" value={boardId!} name="boardId" />

    <Button type="submit" variant="destructive">
      Delete
    </Button>
  </form>
)

export default DeleteBoardButton;