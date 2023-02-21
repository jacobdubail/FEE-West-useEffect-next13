"use client"

import Nav from "@/components/Nav";
import { useEffect, useState } from "react";

type User = {
	id: string;
	name: string;
}
type Post = {	
	id: number;
	title: string;
	body: string;
	userId: string;
}

export default function Page() {
	const [users, setUsers] = useState<User[] | []>([]);
	const [userId, setUserId] = useState<string | null>(null);

	useEffect(() => {
		// iife
		(async () => {
			const data = await fetch('https://jsonplaceholder.typicode.com/users')
			const users = await data.json();
			setUsers(users);
		})();
	}, [])

  return (
    <>
      <h1 className="text-neutral-700 text-4xl font-bold">Async/Await</h1>
			<fieldset>
				<label htmlFor="userId">Select a User: </label>
				<select id="userId" onChange={e => setUserId(e.target.value)} className="border border-neutral-300 rounded bg-neutral-50 px-2 py-1">
					<option value="">--</option>
					{users.map(user => (
						<option key={user.id} value={user.id}>{user.name}</option>
					))}
				</select>
			</fieldset>
			{userId && <List userId={userId} />}
			<Nav currentPage={2} />
    </>
  )
}

function List({userId}:{userId:string}) {  
	const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
		
    (async () => {
			await timeout(3000);
			const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
			const posts = await data.json();
			setPosts(posts);
		})();
  }, [userId])
    
  console.log("List Rendering ", {posts})
  return (
    <ul className="space-y-6 mt-8">
      {posts.map((post) => (
        <li key={post.id}>
					<h2 className="text-lg font-semibold capitalize">{post.title}</h2>
					<h6 className="text-neutral-400 text-xs my-0">User: {post.userId}</h6>
					<p className="mt-2">{post.body}</p>
				</li>
      ))}
    </ul>
  )
}



function timeout(delay: number) {
	return new Promise( res => setTimeout(res, delay) );
}