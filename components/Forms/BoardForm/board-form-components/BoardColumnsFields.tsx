"use client"
import DynamicInputs from "@/components/DynamicInputs";
import TextFieldGroup from "@/components/UI/TextFieldGroup";
import { useBoardFormStore } from "@/state/useBoardFormStore";

const BoardColumnsFields = () => {
  const {
    columns,
    addColumn,
    removeColumn,
    onSetColumnValue,
    onSetColumnError
  } = useBoardFormStore(state => state);

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