import bcrypt from 'bcrypt';

const passwords = ['Simone123', 'Ditte123'];

for (const password of passwords) {
	const hash = await bcrypt.hash(password, 10);
	console.log(password, hash);
}