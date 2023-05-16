export default function fetchData(url) {
	console.log({url})
  const promise = fetch(url)
    .then((res) => {
			console.log({res})
			return res.json()
		})
    .then((res) => {
			console.log({res})
			return res.data
		})

	console.log({promise})

  return promise;
}

function wrapPromise(promise) {
  let status = 'pending'
  let response

  const suspender = promise.then(
    (res) => {
      status = 'success'
      response = res
    },
    (err) => {
      status = 'error'
      response = err
    },
  )

	const read = () => {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw response
      default:
        return response
    }
  }

  return { read }
}
