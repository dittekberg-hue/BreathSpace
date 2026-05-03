import { pgTable, serial, integer, text, date } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	username: text('username').notNull().unique(),
	password: text('password').notNull()
});

export const anfald = pgTable('anfald', {
	id: serial('id').primaryKey(),

	brugerId: integer('bruger_id')
		.notNull()
		.references(() => user.id),

	dato: date('dato').notNull(),

	svaerhedsgrad: integer('svaerhedsgrad').notNull(),

	foerAnfald: text('foer_anfald'),
	anfaldstype: text('anfaldstype').notNull(),
	efterAnfald: text('efter_anfald')
});