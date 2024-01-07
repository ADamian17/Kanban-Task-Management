import React, { ChangeEventHandler, FocusEventHandler, MouseEventHandler } from "react";

import TextFieldWithCross from "../UI/TextFieldWithCross";

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
  onRemoveInput: MouseEventHandler<SVGElement>
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
}) => (
  <>
    {
      inputs.map((inputData) => (
        <TextFieldWithCross
          colId={inputData.id}
          error={inputData.error}
          inputIconClickHandler={onRemoveInput}
          key={inputData.id}
          onSetError={onSetError}
          onSetValue={onSetValue}
          placeholder={placeholderTxt}
          value={inputData.value}
        />
      ))
    }

    <p role="button" className={styles.btn} onClick={onAddInput}>{buttonTxt}</p>
  </>
)


export default DynamicInputs;
