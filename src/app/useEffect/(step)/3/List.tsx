type Post = {	
	id: number;
	title: string;
	body: string;
	userId: number;
}

export async function List({
  data,
}: {
  data: Promise<Response>;
}) {
  const posts = (await data.then((res) => res.json())) as Post[];

  return (
		<ul className="space-y-6 mt-8">
			{posts.map((post) => (
				<li key={post.id} className="">
					<h2 className="text-lg font-semibold capitalize mb-0.5 truncate">{post.title}</h2>
					<h6 className="text-neutral-400 text-xs my-0">User: {post.userId}</h6>
					<p className="mt-2">{post.body}</p>
				</li>
			))}
		</ul>
  );
}

function ListItemSkeleton() {
  return (
    <li className="">
      <h2 className="relative h-7 rounded-xl bg-gray-600 animate-pulse mb-0.5" />
			<h4 className="relative h-4 rounded-xl bg-gray-400 animate-pulse mt-2" />
			<p className="relative h-12 rounded-xl bg-gray-500 animate-pulse mt-2" />
    </li>
  );
}

export function ListSkeleton() {
  return (
		<ul className="space-y-6 mt-8">
			<ListItemSkeleton />
			<ListItemSkeleton />
			<ListItemSkeleton />
			<ListItemSkeleton />
		</ul>
  );
}