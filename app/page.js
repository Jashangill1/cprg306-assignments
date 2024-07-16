"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const underline = 'p-1.5 hover:underline hover:text-red-200'
  const [load, setLoad] = useState(false)

  useEffect(()=>{
    setLoad(true)

  },[])

  return (
    <main
      className="h-screen flex flex-col text-white"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col mt-40">
        <h1 className="text-2xl text-blue-400  text-center justify-center items-center">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <div className="text-center flex flex-col">
          <Link href="./week-2/" className="mt-2 p-1.5 hover:underline hover:text-red-200">Week 2 Assignment</Link>
          <Link href="./week-3/" className={underline}>Week 3 Assignment</Link>
          <Link href="./week-4/" className={underline}>Week 4 Assignment</Link>
          <Link href="./week-5/" className={underline}>Week 5 Assignment</Link>
          <Link href="./week-6/" className={underline}>Week 6 Assignment</Link>
          <Link href="./week-7/" className={underline}>Week 7 Assignment</Link>
        </div>
      </div>
    </main>
  );
}
