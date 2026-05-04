import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { anfald } from '$lib/server/db/schema';

export const actions = {
	default: async ({ request, cookies }) => {
		const brugerId = cookies.get('user_id');

		if (!brugerId) {
			throw redirect(303, '/');
		}

		const data = await request.formData();

		const dato = data.get('dato');
		const svaerhedsgrad = Number(data.get('svaerhedsgrad'));
		const foerAnfald = data.get('foerAnfald');
		const anfaldstype = data.get('anfaldstype');
		const efterAnfald = data.get('efterAnfald');

		if (!dato || !anfaldstype || ![1, 2, 3, 4, 5].includes(svaerhedsgrad)) {
	        return fail(400, {
		        message: 'Udfyld dato, sværhedsgrad og anfaldstype korrekt'
	        });
        }

		await db.insert(anfald).values({
			brugerId: Number(brugerId),
			dato,
			svaerhedsgrad,
			foerAnfald,
			anfaldstype,
			efterAnfald
		});

		return {
			message: 'Anfaldet er gemt'
		};
	}
};