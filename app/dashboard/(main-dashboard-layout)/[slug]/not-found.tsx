import Link from 'next/link'

export default function NotFound({ params }: { params: { slug: string } }) {
  return (
    <>
      <div>
        <h2>Board Not Found</h2>

        <p>Could not find board at URL: {params?.slug}</p>

        <Link href="/dashboard">Return Home</Link>
      </div>
    </>
  )
}