"use client"

import { useRouter } from "next/navigation";

export default function OrderPage(){
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  }

  return(
    <div className="w-full py-4">
      <h2>This is Ordered Page</h2>
      <button onClick={() => handleClick()} className="border rounded-2xl px-10 py-3 hover:cursor-pointer">Back To Home Page</button>
    </div>
  )
}