import { redirect } from 'next/navigation'

import { getBoards } from "@/utils/getBoards";

export default async function Home({
  params,
}: {
  params: {
    page: string[]
  }
}) {
  const data = await getBoards()

  if (!params?.page && data?.boards?.length > 0) {
    redirect(data?.boards[0].uri)
  }

  return (
    <>
      Empty Home Page
    </>
  )
}
