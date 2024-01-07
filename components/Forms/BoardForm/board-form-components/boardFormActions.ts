"use server";

export const addBoard = (boardFormData: FormData) => {
  if (!boardFormData) throw new Error("Form Data Missing");

  const name = boardFormData.get("boardName");
  const columns = boardFormData.getAll("input").map((col) => ({ name: col }));

  console.log("add", { name, columns });
};

export const editBoard = (boardFormData: FormData) => {
  if (!boardFormData) throw new Error("Form Data Missing");

  const name = boardFormData.get("boardName");
  const columns = boardFormData.getAll("input").map((col) => ({ name: col }));

  console.log("add", { name, columns });
};
