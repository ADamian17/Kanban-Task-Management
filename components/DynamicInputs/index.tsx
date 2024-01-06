import React, { ChangeEvent, FocusEvent, useState } from "react";

import TextFieldGroup from "../UI/TextFieldGroup";
import Button from "../UI/Button";

import styles from "./DynamicInputs.module.scss";
import TextField from "../UI/TextField";

type DynamicInputsType = {
  children: React.ReactNode
  buttonTxt: string;
  onInputIncrease: (inputs: ColumnState[]) => void
};

export type ColumnState = {
  value: string
  error: boolean
}

const DynamicInputs: React.FC<DynamicInputsType> = ({
  children,
  buttonTxt,
  onInputIncrease
}) => {
  const [colsNum, setColsNum] = useState(0)
  const [columns, setColumns] = useState<Map<string, ColumnState>>(new Map())
  const mappedColumns = Array.from(columns.entries())

  const addCol = () => {
    setColsNum(prev => prev + 1)
    setColumns(prev => {
      prev.set(`col-${colsNum}`, {
        value: "",
        error: false
      })

      onInputIncrease(Array.from(prev.values()))
      return prev
    })
  }

  const removeCol: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setColsNum(prev => {
      if (prev === 0) return 0;

      return prev - 1
    })

    setColumns(prev => {
      prev.delete((e.target as HTMLElement).id)

      onInputIncrease(Array.from(prev.values()))
      return prev
    })
  }

  const onSetValue = (value: string, e?: ChangeEvent<HTMLInputElement>) => {
    if (!e) return;
    const { name } = e.target

    setColumns(prev => {
      const updateValue = prev.get(name);

      if (!updateValue) return prev;

      updateValue.value = value
      prev.set(name, updateValue)

      onInputIncrease(Array.from(prev.values()))

      return prev
    })
  }

  const onSetError = (error: boolean, e?: FocusEvent<HTMLInputElement>) => {
    if (!e) return;
    const { name } = e.target

    setColumns(prev => {
      const updateValue = prev.get(name);

      if (!updateValue) return prev;

      updateValue.error = error
      prev.set(name, updateValue)

      onInputIncrease(Array.from(prev.values()))

      return prev
    })
  }

  return (
    <div className={styles.wrapper}>
      <TextFieldGroup label="board columns">
        {
          mappedColumns.map(([colName, colData]) => (
            <div key={colName + Date.now()} className={styles.inputWrapper}>
              <TextField
                error={colData.error}
                name={colName}
                onSetError={onSetError}
                onSetValue={onSetValue}
                placeholder="e.g. todo"
                value={colData.value}
              />
              <button id={colName} onClick={removeCol} className={styles.icon}>
                <svg>
                  <use href="/icons/icons-defs.svg#cross"></use>
                </svg>
              </button>
            </div>
          ))
        }
        <Button
          id="add columns"
          variant="secondary"
          onClick={addCol}
          className={styles.btn}
        >
          {buttonTxt}
        </Button>
      </TextFieldGroup>

      {children}
    </div>
  )
};

export default DynamicInputs;
