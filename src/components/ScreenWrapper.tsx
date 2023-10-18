import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

export default function ScreenWrapper({ children }: Props) {
  return <main className="h-screen items-center justify-start flex flex-col box-border p-20 " >
    {children}
  </main>
}

