import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { anfald } from '$lib/server/db/schema';

export const load = async ({ cookies }) => {
	const brugerId = cookies.get('user_id');

	if (!brugerId) {
		throw redirect(303, '/');
	}

	const registreredeAnfald = await db
		.select()
		.from(anfald)
		.where(eq(anfald.brugerId, Number(brugerId)));

	return {
		anfald: registreredeAnfald
	};
};