import { BoardFormStateProp } from "@/types";
import { z } from "zod";

type validateBoardFomArgs = {
  state: BoardFormStateProp;
  boardNameVal: FormDataEntryValue | null;
  columnsVals: FormDataEntryValue[];
};

export function validateBoardFom({
  state,
  boardNameVal,
  columnsVals,
}: validateBoardFomArgs) {
  const columnsSet = new Set<{
    id: string;
    isInvalid: boolean;
  }>();
  const name = z.string().min(1, "Can't be empty");
  const validatedBoardName = name.safeParse(boardNameVal);
  let isValid = true;
  const nextState = {
    ...state,
  };

  if (!validatedBoardName.success) {
    nextState.boardName.isInvalid = !validatedBoardName.success;
    nextState.boardName.msg = validatedBoardName.error.errors[0].message;
    isValid = false;
  }

  columnsVals.forEach((col, idx) => {
    const column = z.string().min(1);
    const validatedCol = column.safeParse(col);

    if (!validatedCol?.success) {
      columnsSet.add({
        id: `col-${idx}`,
        isInvalid: !validatedCol?.success,
      });
      nextState.columns = [...columnsSet.values()];
      isValid = false;
    }
  });

  return {
    nextState,
    isValid,
  };
}
