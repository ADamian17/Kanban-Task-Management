"use server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createBoard = async (prevState: any, formData: FormData) => {
  const boardName = formData.get("boardName");
  const redirectPath = formData.get("_redirect");
  let target = "";

  try {
    const res = await fetch(`${process.env.API_ENDPOINT}/boards/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: boardName }),
      cache: "no-store",
    });

    if (res.status !== 200) throw new Error("Something went wrong");
    const data = await res.json();
    target = data?.createdBoard?.uri;

    revalidateTag("dashboard");

    return {
      ...prevState,
      success: true,
      boardName,
    };
  } catch (error) {
    console.log(error);

    return {
      ...prevState,
      success: true,
      boardName,
    };
  } finally {
    if (redirectPath) redirect(`/dashboard${target}`);
  }
};
