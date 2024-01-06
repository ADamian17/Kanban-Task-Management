import styles from "./BoardForm.module.scss";

type BoardFormProps = {
  headline: string;
}

const BoardForm = ({ headline }: BoardFormProps) => {
  return (
    <div className={styles.boardForm}>
      <h2 className={styles.headline}>{headline}</h2>


    </div>
  )
};

export default BoardForm;