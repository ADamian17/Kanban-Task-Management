"use client"
import { useRef, ElementRef, useState } from "react";
import { useRouter, redirect } from "next/navigation"
import { addBoard } from "./boardFormActions";
import { useBoardFormStore } from "@/state/useBoardFormStore";
import { validateForm } from "./validateForm";

import styles from "../BoardForm.module.scss"

type ModalProviderProps = {
  children: React.ReactNode
  isEdit?: boolean;
}

const BoardFormWrapper = ({ children, isEdit }: ModalProviderProps) => {
  const router = useRouter()
  const formRef = useRef<ElementRef<"form">>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null)
  const { setError, onSetColumnError, resetBoardName, resetColumnsName } = useBoardFormStore(state => state);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current!)

    const isValid = validateForm({
      boardName: data.get("boardName"),
      columns: data.getAll("input"),
      setBoardNameError: setError,
      setColumnError: onSetColumnError,
    })

    if (!isValid) return;

    const { uri, error } = await addBoard(data);

    if (error && error?.message) {
      setErrMsg(error?.message)
      return;
    };
    if (uri) {
      resetBoardName()
      resetColumnsName()
      setErrMsg("")

      router.push(uri)
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      {errMsg && <p className={styles.errMsg}>{errMsg}</p>}
      {children}
    </form>
  )
};

export default BoardFormWrapper;
