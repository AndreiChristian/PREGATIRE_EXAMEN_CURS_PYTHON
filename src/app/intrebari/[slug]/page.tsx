import ScreenWrapper from "@/components/ScreenWrapper"
import { prisma } from "@/prisma"
import { Question } from "@prisma/client"

export default async function Page({ params }: { params: { slug: string } }) {

  let question: Question | null = null
  try {
    await prisma.question.findFirst({
      where: {
        id: parseInt(params.slug)
      }
    })
  } catch (err) {
    console.warn(err)
  }

  return <ScreenWrapper>
    {question ?
      <h1>Nicio intrebare momentan</h1>
      :
      <div>{JSON.stringify(question)}</div>
    }
  </ScreenWrapper>
}
