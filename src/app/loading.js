export default function Loading() {
  return <LoadingSkeleton items={3} />;
}

export function LoadingSkeleton({ items = 1 }) {
	return (
		<>
			{Array.from({ length: items }).map((_, i) => (
				<SkeletonItem key={i} />
			))}
		</>
	)
}

function SkeletonItem() {
	return (
		<div className="max-w-4xl py-6 space-y-2 animate-pulse">
			<div className="h-4 bg-gray-200 rounded-xl dark:bg-gray-700 w-36"></div>
			<div className="w-64 h-8 bg-gray-200 rounded-xl dark:bg-gray-700"></div>
			<div className="max-w-3xl space-y-1">
				<div className="w-full h-4 bg-gray-200 rounded-xl dark:bg-gray-700"></div>
				<div className="w-full h-4 bg-gray-200 rounded-xl dark:bg-gray-700"></div>
				<div className="w-full h-4 bg-gray-200 rounded-xl dark:bg-gray-700"></div>
				<div className="w-full h-4 bg-gray-200 rounded-xl dark:bg-gray-700"></div>
				<div className="h-4 bg-gray-200 rounded-xl dark:bg-gray-700 w-96"></div>
			</div>
			<span className="sr-only">Loading...</span>
		</div>
	)
}