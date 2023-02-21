export default function usePosts() {
	const posts = fetch('https://jsonplaceholder.typicode.com/posts')

	return {
		posts
	}
}