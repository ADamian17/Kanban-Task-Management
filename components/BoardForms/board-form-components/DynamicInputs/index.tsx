"use client"
import { useEffect, useState } from "react";

import TextFieldWithCross from "@/components/UI/TextFieldWithCross";

import styles from "./DynamicInputs.module.scss"

export type InputProps = {
  id: string
  value: string;
  error: boolean;
}

type DynamicInputsType = {
  buttonTxt: string;
  inputs: InputProps[]
  onAddInput: () => void
  onRemoveInput: (id: string) => void
  onSetError: (id: string, error: boolean) => void
  onSetValue: (id: string, value: string) => void
  placeholderTxt?: string;
};

const DynamicInputs: React.FC<DynamicInputsType> = ({
  buttonTxt,
  inputs,
  onAddInput,
  onRemoveInput,
  onSetError,
  onSetValue,
  placeholderTxt,
}) => {
  const [isDisable, setIsDisable] = useState(false);

  const handleRemoveInput: React.MouseEventHandler<SVGElement> = (e) => {
    onRemoveInput((e.target as HTMLElement).id)
  }

  useEffect(() => {
    if (inputs.length >= 3) {
      setIsDisable(true)
      return
    }

    setIsDisable(false)
  }, [inputs])

  return (
    <>
      {
        inputs.map((inputData) => (
          <TextFieldWithCross
            colId={inputData.id}
            error={inputData.error}
            inputIconClickHandler={handleRemoveInput}
            key={inputData.id}
            onSetError={onSetError}
            onSetValue={onSetValue}
            placeholder={placeholderTxt}
            value={inputData.value}
          />
        ))
      }

      <p
        role="button"
        className={`${styles.btn} ${isDisable && styles.isDisable}`}
        onClick={onAddInput}
      >
        {buttonTxt}
      </p>
    </>
  )
}


export default DynamicInputs;
