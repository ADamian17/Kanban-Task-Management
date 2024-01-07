"use client"
import { ChangeEventHandler, FocusEventHandler, MouseEventHandler, createContext, useContext, useState, useRef, ElementRef } from "react";
import { addBoard, editBoard } from "./boardFormActions";

import styles from "../BoardForm.module.scss"
import { InputProps } from "@/components/DynamicInputs";
import { validateForm } from "./validateForm";

type ModalProviderProps = {
  children: React.ReactNode
  isEdit?: boolean;
}

type ModalCtxType = {
  boardName: Pick<InputProps, "error" | "value">
  columns: InputProps[]
  handleAddColumns: () => void
  handleBoardNameBlur: FocusEventHandler<HTMLInputElement>
  handleBoardNameChange: ChangeEventHandler<HTMLInputElement>
  handleRemoveColumns: MouseEventHandler<SVGElement>
  onSetError: (id: string, error: boolean) => void
  onSetValue: (id: string, value: string) => void
}

const BoardFormCtx = createContext({} as ModalCtxType);

export const useBoardFormCtx = () => useContext(BoardFormCtx)

export const BoardFormProvider = ({ children, isEdit }: ModalProviderProps) => {
  const formRef = useRef<ElementRef<"form">>(null)
  const inputData = {
    value: "",
    error: false
  }

  const [boardName, setBoardName] = useState({ ...inputData });
  const columnsMap: Record<string, InputProps> = {};
  const [colCount, setColCount] = useState(0)
  const [columns, setColumns] = useState<ModalCtxType["columns"]>([...Object.values(columnsMap)]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const isValid = validateForm({ boardName, setBoardNameError, })
    console.log({ isValid });

    if (!isValid) return;

    const data = new FormData(formRef.current!)

    if (isEdit) {
      editBoard(data)
      return
    }

    addBoard(data)
  }

  const handleBoardNameChange: ModalCtxType["handleBoardNameChange"] = (e) => {
    const { value } = e.target

    if (boardName.error) {
      setBoardNameError(false)
    }

    setBoardName(prev => ({
      ...prev,
      value
    }))
  }

  const handleBoardNameBlur: ModalCtxType["handleBoardNameBlur"] = (e) => {
    if (e.target.value.trim() === "") {
      setBoardNameError(true)
    }
  }

  const setBoardNameError = (error: boolean) => {
    setBoardName(prev => ({
      ...prev,
      error
    }))
  }

  const handleAddColumns = () => {
    setColumns(prev => [...prev, { id: `col-${prev.length}`, ...inputData }])
  }


  const handleRemoveColumns: React.MouseEventHandler<SVGElement> = (e) => {
    setColumns(prev => {
      const foundItemIdx = prev.findIndex((item) => item.id === (e.target as HTMLElement).id)
      prev.splice(1, foundItemIdx)
      console.log(prev);

      return prev
    })
  }

  const onSetValue = (id: string, value: string) => {
    // setColumnsMap(prev => {
    //   const updatedValue = prev.get(id);

    //   if (!updatedValue) return prev;

    //   updatedValue.error = false
    //   updatedValue.value = value

    //   prev.set(id, updatedValue);

    //   return prev
    // })
  }

  const onSetError = (id: string, error: boolean) => {
    // setColumnsMap(prev => {
    //   const updatedValue = prev.get(id);

    //   if (!updatedValue) return prev;

    //   updatedValue.error = error
    //   prev.set(id, updatedValue)

    //   return prev
    // })
  }

  const value = {
    boardName,
    columns,
    handleAddColumns,
    handleBoardNameBlur,
    handleBoardNameChange,
    handleRemoveColumns,
    onSetValue,
    onSetError,
  }

  return (
    <BoardFormCtx.Provider value={value}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        {children}
      </form>
    </BoardFormCtx.Provider>
  )
};