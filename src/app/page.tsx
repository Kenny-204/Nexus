"use client"

import { useAuth } from "@/lib/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
const {currentUser} = useAuth()
  console.log(currentUser)

  return (
    <div>
      <Link href="login">Login page</Link>
      <Link href="home">Home page</Link>
    </div>
  );
}
