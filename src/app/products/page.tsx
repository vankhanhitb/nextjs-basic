import type { Metadata } from "next"
import Link from "next/link";

export const metadata: Metadata= {
  title: "Product"
}

export default function ProductPages(){

  return(
    <div className="w-full border bg-gray-100">
      <h2 className="text-3xl m-2">This is product page(s)</h2>
      <div className="w-full flex items-center justify-center gap-2">
        <Link href={"/products/product-1"}>product 1</Link>
        <Link href={"/products/product-2"}>product 3</Link>
        <Link href={"/products/product-3"}>product 3</Link>
      </div>
    </div>
  )
}