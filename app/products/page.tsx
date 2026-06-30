import type { Metadata } from "next"

export const metadata: Metadata= {
  title: {
    absolute: "Product"
  }
}

export default function ProductPages(){

  return(
    <div className="w-full border bg-gray-100">
      <h2 className="text-3xl m-2">This is product page(s)</h2>
    </div>
  )
}