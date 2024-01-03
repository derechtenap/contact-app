import { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "libsql",
  dbCredentials: {
    url: "file:./db/local.db",
  },
  verbose: true, // Print all statements
  strict: true, // Always ask for confirmation
} satisfies Config;
