type ProductLayout= {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function ProductLayout(
  {children, modal}: ProductLayout
){
  return(
    <div className="product-page">
      {children}
      {modal}
    </div>
  )
}