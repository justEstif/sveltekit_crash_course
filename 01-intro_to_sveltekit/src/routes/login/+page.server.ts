import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ request }) => {
		const data = await request.formData();

		const credentials = {
			name: data.get('name'),
			password: data.get('password')
		};

		// do whatever you need
		console.log(credentials);
	}
};
