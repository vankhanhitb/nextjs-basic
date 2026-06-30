export default function Header(){
  return(
    <header className="w-full rounded-2xl">
        <div className="w-full grid gap-2 grid-cols-12 bg-amber-100">
            <div className="col-span-2 border-r border-gray-400">
              <h1 className="text-2xl uppercase font-bold">logo</h1>
            </div>
            <div className="col-span-7">
              <h2 className="text-2xl uppercase font-bold">Navigation</h2>
            </div>
            <div className="col-span-2">
              <h2 className="text-2xl uppercase font-bold">Icons</h2>
            </div>
        </div>
    </header>
  )
}