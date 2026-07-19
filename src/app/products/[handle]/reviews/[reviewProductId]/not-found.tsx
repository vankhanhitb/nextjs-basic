'use client'

import { usePathname } from 'next/navigation'

export default function ProductNotFound(){
  const pathname = usePathname();
  const productId = pathname?.split('/')[2];
  const reviewId = pathname?.split('/')[4];

  return(
    <div className="w-full">
      <h2 className="text-2xl">Product Not Fouund [{productId}] - [{reviewId}]</h2>
    </div>
  )
}