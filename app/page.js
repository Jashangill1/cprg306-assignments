
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <h1 className="text-xl">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2/">Week 2 Assignment</Link>
      <Link href="./week-3/">Week 3 Assignment</Link>
    </main>
  );
}
