import Link from 'next/link'

export default function Home() {

  return (
		<div className="grid grid-cols-2 gap-x-4">
			<div>
				<h2>Core Hooks</h2>

				<ul>
					<li>useState</li>
					<li>
						<Link href="/useEffect">
							useEffect
						</Link>
					</li>
					<li>useContext</li>
					<li>useCallback</li>
					<li>useMemo</li>
					<li>useRef</li>
					<li>useReducer</li>
					<li>useId</li>
					<li>useTransition</li>
					<li>useSelect (WP)</li>
					<li>useDispatch (WP)</li>
					<li>useEntityRecords (WP)</li>
					<li>useEntityRecord (WP)</li>
					<li>useResourcePermissions (WP)</li>
				</ul>
			</div>
			<div>
				<h2>Core Concepts</h2>
				<ul>
					<li>Pure functions</li>
					<li>Component lifecycle</li>
					<li>Reactive interactions</li>
					<li>Side effects</li>
				</ul>
			</div>
		</div>
  )
}
