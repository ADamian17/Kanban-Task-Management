import Link from 'next/link';
// background - color: #8EC5FC;
// background - image: linear - gradient(62deg, #8EC5FC 0 %, #E0C3FC 100 %);

export default async function Home() {
  return (
    <section>
      <div />

      <div>
        <h1>Kanban task management web app</h1>

        <p>
          Welcome to our innovative demo app, born out of a challenge posed by Frontend Mentor. Our task management application, inspired by their Kanban challenge, is a fully-functional solution tailored for the Next JS framework. With a dynamic interface and customizable features, users can effortlessly organize tasks while enjoying the added convenience of a light/dark mode toggle. Seamlessly integrating with the Next JS framework, this app not only meets but exceeds the requirements of the Frontend Mentor challenge. Welcome to a new era of task management, where efficiency meets creativity in a sleek and adaptable package.
        </p>

        <Link href="/dashboard">
          Go to Dashboard
        </Link>
      </div>
    </section>
  )
}
