import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: "Blog"
  }
}

export default function BlogsList(){
  return (
    <div className="w-full py-10">
      <h2 className="text-2xl"> This is Blog List page</h2>
    </div>
  )
}