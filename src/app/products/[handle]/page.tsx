import type { Metadata } from "next"

type metadataProp = {
  params: Promise<{ handle: string }>
}

export const generateMetadata = async ({ params }: metadataProp): Promise<Metadata> => {
  const handle = (await params).handle;
  return {
    title: {
      default: `product-detail-${handle}`,
      absolute: "Detail"
    }
  }
}

type ProductDetailProps = {
  params: Promise<{ handle: string }>;
};

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { handle } = await params;

  return(
    <div className="w-full pl-2 pr-2">
      <h2 className="text-2xl">This is detail product <span className="text-xl font-bold italic"> { handle } </span> using nest route</h2>
    </div>
  )
}
