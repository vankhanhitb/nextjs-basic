"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Header(){
  const pathName = usePathname();

  const navLinks = [
    {name: "Home", href: "/"},
    {name: "Blog", href: "/blogs"},
    {name: "Product", href: "/products"}
  ]

  return(
    <header className="w-full rounded-2xl">
        <div className="w-full grid gap-2 grid-cols-12 bg-amber-100">
            <div className="col-span-2 border-r border-gray-400">
              <h1 className="text-2xl uppercase font-bold">logo</h1>
            </div>
            <div className="col-span-7">
              <ul className="w-full flex justify-center items-center gap-4 h-full">
                {
                  navLinks.map((link) => {
                    const isActive = pathName === link.href;
                    return(
                       <li key={link.href}>
                        <Link href={link.href} className={isActive ? "text-blue-600 text-md uppercase" : "text-md uppercase" }>{link.name}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="col-span-2">
              <h2 className="text-2xl uppercase font-bold">Icons</h2>
            </div>
        </div>
    </header>
  )
}