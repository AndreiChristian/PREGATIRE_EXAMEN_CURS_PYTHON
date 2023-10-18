import { prisma } from "@/prisma"

export default async function Home() {

  const questions = await prisma.question.count()

  return (
    <main>
      <h1>Soon to be cool python stuff</h1>
      <h2>number of questions: {questions}</h2>
    </main>
  )
}
