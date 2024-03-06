import Link from "next/link";

export default function Home() {
  return (
    <>
    <header>

      <Link className="text-primary font-semibold" href="">Igbadun </Link>
      <nav className="flex">
       <Link href={""}>Home</Link>
       <Link href={""}>Menu</Link>
       <Link href={""}>About</Link>
       <Link href={""}>Contact</Link>
       <Link href={""}>Log-in</Link>
      </nav>
    </header>
    </>
  );
}
