import { z } from "zod";

type ValidateFromProps = {
  boardName: FormDataEntryValue | null;
  columns: FormDataEntryValue[];
  setBoardNameError: (error: boolean) => void;
  setColumnError: (id: string, error: boolean) => void;
};

export function validateForm({
  boardName,
  columns,
  setBoardNameError,
  setColumnError,
}: ValidateFromProps) {
  let isValid = true;

  const name = z.string().min(1);
  const validatedBoardName = name.safeParse(boardName);

  if (!validatedBoardName.success) {
    setBoardNameError(!validatedBoardName.success);
    isValid = false;
  }

  columns.forEach((col, idx) => {
    const column = z.string().min(1);
    const validatedCol = column.safeParse(col);

    if (!validatedCol?.success) {
      setColumnError(`col-${idx}`, !validatedCol?.success);
      isValid = false;
    }
  });

  return isValid;
}
