import DynamicInputs from "@/components/DynamicInputs";
import { useBoardFormCtx } from "./BoardFormProvider";

import TextFieldGroup from "@/components/UI/TextFieldGroup";

const BoardColumnsFields = () => {
  const {
    columns,
    handleAddColumns,
    handleRemoveColumns,
    onSetError,
    onSetValue,
  } = useBoardFormCtx();

  return (
    <TextFieldGroup label="board Columns">
      <DynamicInputs
        buttonTxt="+ Add New Column"
        inputs={columns}
        onAddInput={handleAddColumns}
        onRemoveInput={handleRemoveColumns}
        onSetError={onSetError}
        onSetValue={onSetValue}
        placeholderTxt="e.g Todo"
      />
    </TextFieldGroup>
  )
};

export default BoardColumnsFields;