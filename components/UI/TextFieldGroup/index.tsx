import styles from "./TextFieldGroup.module.scss";

type TextFieldGroupProps = {
  children: React.ReactNode
  label: string
}

const TextFieldGroup = ({ label, children }: TextFieldGroupProps) => {
  return (
    <div className={`${styles.textFieldGroupWrapper}`}>
      <label className={styles.label}>{label}</label>
      {children}
    </div>
  )
}

export default TextFieldGroup;