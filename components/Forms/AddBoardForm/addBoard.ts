"use server";

export const addBoard = (formData: FormData) => {
  const name = formData.get("boardName");

  const data = {
    name,
  };

  console.log(data);
};
