import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/prisma"
import Link from "next/link"

export default async function Home() {

  const questions = await prisma.question.count()

  return (
    <main className="h-screen flex items-center justify-center" >
      <Card>
        <CardHeader>
          <CardTitle>Pregaire pentru examen 🐍</CardTitle>
          <CardDescription>
            <h2>Numarul actual de intrebari: {questions}</h2>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>👋 Examenul se apropie asa ca este timpul perfect pentru o recapitulare!
            Aveti pregatite o liste cu intrebari, cat si o simulare pentru examen!
          </p>
        </CardContent>
        <CardFooter>
          <div className="w-full flex items-center justify-evenly">
            <Button asChild >
              <Link href={'/intrebari'}>Intrebari 📖 </Link>
            </Button>
            <Button asChild disabled >
              <Link href={'/simulare'}>Simulare (In Progres 👷) </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}
