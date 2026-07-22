type PropRevenueType= {
  children: Readonly<React.ReactNode>
}

export default function RevenueLayout({children}: PropRevenueType) {
  return (
    <div>
      {children}
    </div>
  )
}
