import { products } from "../../data/products"

export async function GET(_request: Request, {params}: {params: Promise<{id: string}>}){
  const {id} = await params;
  const productId = Number(id);

  if (Number.isNaN(productId)) {
    return Response.json({ error: "Product id must be a number" }, { status: 400 });
  }

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return Response.json({ error: "Product not found" }, { status: 404 });
  }

  return Response.json(product);
}

export async function PATCH(
  request: Request,
  {params}: {params: Promise<{id: string}>}
){
  const {id} = await params;
  const productId = Number(id);
  const body = await request.json();

  if (Number.isNaN(productId)) {
    return Response.json({ error: "Product id must be a number" }, { status: 400 });
  }

  if(!body || typeof body !== "object"){
    return Response.json({error: "Request body is required"},  { status: 400 });
  }

  const { title, description } = body;

  const index = products.findIndex((product) => product.id === productId);
  if(index === -1){
    return Response.json({error: "Product not found"},  { status: 404 });
  }

  if (title) {
    products[index].title = title;
  }

  if (description) {
    products[index].description = description;
  }

  return Response.json(products[index]);
}

export async function DELETE(
  _request: Request,
  {params}: {params: Promise<{id: string}>}
) {
  const {id} = await params;
  const productId = Number(id);

  if (Number.isNaN(productId)) {
    return Response.json({ error: "Product id must be a number" }, { status: 400 });
  }

  const index = products.findIndex((product) => product.id === productId);

  if(index === -1) {
    return Response.json({error: "Product not found"}, {status: 404})
  }

  const deleteProduct = products[index];
  products.splice(index, 1);
  
  return Response.json(deleteProduct);

}