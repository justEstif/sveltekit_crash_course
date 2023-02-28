// @ts-nocheck
import type { Actions } from './$types';

export const actions = {
	login: async ({ request }: import('./$types').RequestEvent) => {
		const data = await request.formData();

		const credentials = {
			name: data.get('name'),
			password: data.get('password')
		};

		// do whatever you need
		console.log(credentials);
	}
};
;null as any as Actions;