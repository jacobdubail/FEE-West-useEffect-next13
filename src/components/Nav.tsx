import Link from "next/link";

export default function Nav({segment = 'useEffect', currentPage = 1, lastPage = false}) {
  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white py-3 mt-20"
      aria-label="Pagination"
    >
			{currentPage > 0 && (
				<Link
					href={currentPage > 1 ? `/${segment}/${currentPage-1}` : `/${segment}`}
					className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Previous
				</Link>
			)}
			{!lastPage && (
				<Link
					href={`/${segment}/${currentPage+1}`}
					className="relative ml-auto inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Next
				</Link>
			)}
    </nav>
  )
}