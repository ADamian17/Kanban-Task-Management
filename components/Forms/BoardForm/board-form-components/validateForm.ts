import { InputProps } from "@/components/DynamicInputs";

type ValidateFromProps = {
  boardName: Pick<InputProps, "error" | "value">;
  setBoardNameError: (error: boolean) => void;
  // columns: [string, InputDataType][];
};

export function validateForm({
  boardName,
  setBoardNameError,
}: ValidateFromProps) {
  let isValid = true;

  // if (boardName.value.trim() === "") {
  //   setBoardNameError(true);
  //   isValid = false;
  // }

  // columns.forEach(([colId, col]) => {
  //   if (col.value.trim() === "") {
  //     const updatedValue = { ...col };
  //     updatedValue.error = true;

  //     setColumnsMap((prev) => {
  //       prev.set(colId, updatedValue);

  //       return prev;
  //     });
  //   }
  // });

  return isValid;
}
