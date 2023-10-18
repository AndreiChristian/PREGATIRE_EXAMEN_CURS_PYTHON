import Link from "next/link";

export default function Navigation() {
  return <nav className="
    flex items-center justify-between gap-4 p-4 box-border shadow fixed top-0 left-0 w-full h-10
    " >
    <div>Acasa</div>
    <span className="flex-1"></span>
    <Link href="/intrebari">Intrebari</Link>
    <Link href="/simulare">Simulare</Link>
  </nav>
}
