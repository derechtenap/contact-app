import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  name: text("name", { length: 200 }).notNull(),
});

export type User = typeof users.$inferSelect;
