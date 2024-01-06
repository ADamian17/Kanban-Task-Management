"use server";

type BoardFormDataType = {
  name: string;
  columns: Array<{ name: string }>;
};

export const addBoard = (boardFormData: BoardFormDataType) => {
  if (!boardFormData) throw new Error("Form Data Missing");

  console.log(boardFormData);
};

export const editBoard = (boardFormData: BoardFormDataType) => {
  if (!boardFormData) throw new Error("Form Data Missing");

  console.log(boardFormData);
};
