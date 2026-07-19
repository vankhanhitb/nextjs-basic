type ProductReviewProp = {
  params: Promise<{handle: string, reviewProductId: string}>
}

export default async function ProductReviewById({params} : ProductReviewProp){
  const { handle, reviewProductId } = await params;
  
  return(
    <div className="w-full">
      <h2 className="text-2xl">This is [{handle}] Product Review By [{reviewProductId}]</h2>
    </div>
  )
}