import Link from 'next/link'

export default function Home() {
  return (
    <main>
      Welcome

      <Link href={"/dashboard/"}>Co to Dashboard</Link>
    </main>
  )
}
