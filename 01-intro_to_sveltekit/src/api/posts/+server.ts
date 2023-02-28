import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	// get posts from database
	const posts = [
		{
			slug: 'sveltekit',
			content: `
        <h1>SvelteKit</h1>
        <p>This data came from the server. 🔥</p>
    `
		}
	];

	return json(posts);
};
