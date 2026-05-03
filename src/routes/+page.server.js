import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		const username = data.get('username');
		const password = data.get('password');

		const result = await db.select().from(user).where(eq(user.username, username)).limit(1);
		const foundUser = result[0];

		if (!foundUser) {
			return fail(400, {
				message: 'Forkert brugernavn eller adgangskode'
			});
		}

		const passwordMatch = await bcrypt.compare(password, foundUser.password);

		if (!passwordMatch) {
			return fail(400, {
				message: 'Forkert brugernavn eller adgangskode'
			});
		}

		cookies.set('user_id', foundUser.id, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: false
		});

		throw redirect(303, '/home');
	}
};