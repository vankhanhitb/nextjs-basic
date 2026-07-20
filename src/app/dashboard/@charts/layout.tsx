
type ChartLayout = {
  children: React.ReactNode;
}

export default function ChartLayout({ children }: ChartLayout) {
  return(
    <div>
      <h1>Chart Title</h1>
      {children}
    </div>
  )
}