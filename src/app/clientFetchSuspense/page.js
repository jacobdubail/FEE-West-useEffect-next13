"use client";

import { useEffect, useState, Suspense } from "react";
import { LoadingSkeleton } from "../loading";

let grants;
const resource = fetch('https://data.ca.gov/datastore/odata3.0/111c8c88-21f6-453c-ae2c-b4785a0624f5?$top=10&$format=json')
.then((data) => data.json())
.then( data => grants = data.value);

export default function ClientFetch() {
  return (
		<div className="space-y-6 divide-y divide-white/20">
			<Suspense fallback={<LoadingSkeleton items={3} />}>
				<List />
			</Suspense>
		</div>
  )
}

function List() {
	if ( ! grants ) {
		throw resource;
	}

	return (
		<>
			{Array.isArray(grants) && grants.map((item) => {
				return (
					<div key={item.PortalID} className="py-6 space-y-2">
						<h4 className="text-xs font-bold tracking-wide text-zinc-500">{item.AgencyDept}</h4>
						<h3 className="font-serif text-2xl font-bold text-zinc-100">{item.Title}</h3>
						<p>
							{item.Description}
						</p>
						<a href={item.GrantURL} className="inline-block mt-4 font-serif underline cursor-pointer" target="_blank">Learn More</a>
					</div>
				)
			})}
		</>
	)
}
