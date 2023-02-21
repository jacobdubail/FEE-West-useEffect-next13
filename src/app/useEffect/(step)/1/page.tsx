"use client"

import Nav from "@/components/Nav";
import { useEffect, useState } from "react";

export default function Page() {
	useEffect(() => {
    console.log("Parent Use Effect, no deps");
  }) // runs every render
  
  useEffect(() => {
    console.log("Parent Use Effect, empty deps");
  }, []) // runs on mount (first render)
  
  console.log("Parent Rendering")
  return (
    <>
      <h1 className="">Reactive interactions and side effects</h1>
			<h3>useEffect</h3>
			<pre>useEffect(setup, dependencies?)</pre>
			<p>Setup: Your effect&apos;s logic, and optional cleanup function.</p>
			<p>Dependencies: an <em>optional</em> array of reactive values used in your Setup logic.</p>
			<List name="Sets title directly" />
			<Nav currentPage={1} />
    </>
  )
}

function List({name}:{name:string}): JSX.Element {  
	// const [count, setCount] = useState(0);
	const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("List Use Effect, no deps");
    const data = fetch('https://jsonplaceholder.typicode.com/posts')
		setPosts(data);
  })
  
  useEffect(() => {
    console.log("List Use Effect, empty deps");
  }, [])

	// document.title = name;

  
  console.log("List Rendering ", {posts})
  return (
		<>
			<pre>{JSON.stringify(data,null, 2)}</pre>
			{/* <button className="border shadow-sm px-3 py-1 rounded hover:bg-neutral-100" onClick={() => setCount(count + 1)}>Increment {count}</button> */}
			{/* <ul className="space-y-6 mt-8">
				{Array.isArray(posts) && posts.map(post => (
					<li key={post.id}>
						<h2 className="text-lg font-semibold capitalize">{post.title}</h2>
						<p className="mt-2">{post.body}</p>
					</li>
				))}
			</ul> */}
		</>
  )
}