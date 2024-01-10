import BoardColumnsFields from "./board-form-components/BoardColumnsFields";
import BoardFormWrapper from "./board-form-components/BoardFormWrapper";
import BoardNameTextField from "./board-form-components/BoardNameTextField";
import Button from "@/components/UI/Button";

import styles from "./BoardForm.module.scss";

type BoardFormProps = {
  headline: string;
  isEdit?: boolean;
  submitBtnTxt: string
}

/** 
  * @param {Object} props - components props.
  * @param {string} props.headline - Form Headline
  * @param {boolean} props.isEdit - When is true will submit the form using the edit end point
*/
const BoardForm = ({ headline, isEdit, submitBtnTxt }: BoardFormProps) => (
  <div className={styles.boardForm}>
    <h2 className={styles.headline}>{headline}</h2>

    <BoardFormWrapper>
      <BoardNameTextField />

      <BoardColumnsFields />

      <Button type="submit">{submitBtnTxt}</Button>
    </BoardFormWrapper>
  </div>
)

export default BoardForm;