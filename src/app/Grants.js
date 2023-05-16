async function getData() {
	let res;
	await new Promise(resolve => setTimeout(resolve, 3000));
	try {
		res = await fetch('https://data.ca.gov/datastore/odata3.0/111c8c88-21f6-453c-ae2c-b4785a0624f5?$top=10&$format=json');
	}
	catch (err) {
		console.error(err);
	}

	return res.json();
}

export default async function Grants() {
	const data = await getData();
	return (
		<>
			{data.value.map((item) => (
				<div key={item.PortalID} className="py-6 space-y-2">
					<h4 className="text-xs font-bold tracking-wide text-zinc-500">{item.AgencyDept}</h4>
					<h3 className="font-serif text-2xl font-bold text-zinc-100">{item.Title}</h3>
					<p>
						{item.Description}
					</p>
					<a href={item.GrantURL} className="inline-block mt-4 font-serif underline cursor-pointer" target="_blank">Learn More</a>
				</div>
			))}
		</>
	)
};