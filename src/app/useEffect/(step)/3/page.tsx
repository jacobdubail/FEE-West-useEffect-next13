
import Nav from "@/components/Nav";
import { Suspense } from "react";
import {List, ListSkeleton} from "./List";

async function getPosts() {
	function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
	}
	await timeout(3000);
	return await fetch("https://jsonplaceholder.typicode.com/posts?userId=5");
}

export default async function Page() {
  return (
    <>
      <h1 className="text-neutral-700 text-4xl font-bold">Suspense</h1>
			<Suspense fallback={<ListSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <List
          data={getPosts()}
        />
      </Suspense>
			<Nav currentPage={3} lastPage />
    </>
  )
}
