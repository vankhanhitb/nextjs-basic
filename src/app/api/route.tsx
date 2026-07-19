import { products } from "../data/products"

export async function GET(){
  return Response.json(products);
}

export async function POST(request: Request){
  const product = await request.json();

  if (!product.title || !product.description) {
    return Response.json(
      { error: "Product title and description are required" },
      { status: 400 }
    )
  }

  const newProduct= {
    id: 1000000 + products.length + 1,
    title: product.title + " " + products.length ,
    description: product.description + " " + products.length,
    variants: [
      {
        option: "Size",
        value: "S, M, L, XL, XS"
      },
      {
        options: "Color",
        value: "Red, Blue, Green, Yallow, Pupple, Black"
      }
    ]
  }
  products.push(newProduct);
  return Response.json(newProduct, { status: 201 })
}
