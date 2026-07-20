

type ProductModal= {
  params: Promise<{handle: string}>
}

export default async function page({ params }: ProductModal) {
  const { handle } = await params;

  return (
    <div role="dialog">{
      (handle ? handle : <div>
        Product modal
      </div>)    
    }</div>
  )
}
