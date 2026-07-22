import Link from "next/link";

export default function RevenuePage() {
  return (
    <div>
      <h1>Revenue Page</h1>
      <Link href={"/dashboard/views"}>Views</Link>
    </div>
  )
}
