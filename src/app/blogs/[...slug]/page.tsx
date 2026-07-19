type BlogSlugProp = {
  params: Promise<{slug: string[]}>
}

export default async function BlogSlugPage({ params }: BlogSlugProp){
  const { slug } = await params
  
  if(slug?.length === 2){
    return(
      <div className="w-full py-10">
        <h2 className="text-2xl">This is Blog Slug Page <span className="italic font-bold text-xl">[{slug[0]}] - [{slug[1]}]</span></h2>
      </div>
    )
  }else if(slug?.length === 1){
    return(
      <div className="w-full py-10">
        <h2 className="text-2xl">This is Blog Slug Page <span className="italic font-bold text-xl">[{slug[0]}]</span></h2>
      </div>
    )
  }else{
    return (
      <div className="w-full py-10">
        <h2 className="text-2xl">This is Blog Slug Page <span className="italic font-bold text-xl">[{slug}]</span></h2>
      </div>
    )
  }
}