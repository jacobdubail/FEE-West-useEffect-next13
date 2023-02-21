"use client"

import Nav from "@/components/Nav";
import Image from "next/image";

export default function UseEffect() {

  console.log("Parent Rendering")
  return (
    <>
      <h1 className="mb-0">useEffect</h1>
			<p className="text-neutral-500 mt-2">an escape hatch</p>
			
			<h2>What is a pure function?</h2>
			<p>Given the same input, a pure function will <em>always</em> produce the same output (JSX).</p>
			<p><i>What would cause a component to produce unpredictable output?</i></p>
			
			<h2>What does the component lifecycle look like?</h2>
			<Image src="/hook-flow.png" alt="" width={640} height={815} />
			
			<Nav currentPage={0} />
    </>
  )
}