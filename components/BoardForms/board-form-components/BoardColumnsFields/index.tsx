"use client"
import TextFieldGroup from "@/components/UI/TextFieldGroup";
import { useBoardFormStore } from "@/state/useBoardFormStore";
import { Board } from "@/types";
import { useEffect } from "react";
import DynamicInputs from "../DynamicInputs";

const BoardColumnsFields = ({ externalColumns }: { externalColumns?: Board["columns"] }) => {
  const {
    columns,
    addColumn,
    removeColumn,
    onSetColumnValue,
    onSetColumnError,
    setColumns,
    resetColumnsName
  } = useBoardFormStore(state => state);

  useEffect(() => {
    if (externalColumns) {
      setColumns(externalColumns)
    }
    return () => resetColumnsName()

  }, [externalColumns, setColumns, resetColumnsName])

  return (
    <TextFieldGroup label="board Columns">
      <DynamicInputs
        buttonTxt="+ Add New Column"
        inputs={columns}
        onAddInput={addColumn}
        onRemoveInput={removeColumn}
        onSetError={onSetColumnError}
        onSetValue={onSetColumnValue}
        placeholderTxt="e.g Todo"
      />
    </TextFieldGroup>
  )
};

export default BoardColumnsFields;
