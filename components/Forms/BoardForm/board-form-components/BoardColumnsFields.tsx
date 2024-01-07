import DynamicInputs from "@/components/DynamicInputs";
import { useBoardFormCtx } from "./BoardFormProvider";

import TextFieldGroup from "@/components/UI/TextFieldGroup";
import { useBoardFormStore } from "@/state/useBoardFormStore";

const BoardColumnsFields = () => {
  const {
    onSetError,
    onSetValue,
  } = useBoardFormCtx();

  const { columns, addColumn, removeColumn } = useBoardFormStore()

  return (
    <TextFieldGroup label="board Columns">
      <DynamicInputs
        buttonTxt="+ Add New Column"
        inputs={columns}
        onAddInput={addColumn}
        onRemoveInput={removeColumn}
        onSetError={onSetError}
        onSetValue={onSetValue}
        placeholderTxt="e.g Todo"
      />
    </TextFieldGroup>
  )
};

export default BoardColumnsFields;