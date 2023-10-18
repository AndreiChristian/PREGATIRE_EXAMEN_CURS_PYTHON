import ScreenWrapper from "@/components/ScreenWrapper"
import { prisma } from "@/prisma"

export default async function Page() {

  const questions = await prisma.question.findMany()

  return <ScreenWrapper>
    {questions.length === 0 ?
      <h1>Nicio intrebare momentan</h1>
      :
      <div>{JSON.stringify(questions)}</div>
    }
  </ScreenWrapper>
}
