import { defineConfig } from "drizzle-kit";
import config from "config";

export default defineConfig({
	out: "./migrations",
	schema: "./src/database/schema.js",
	dialect: "postgresql",
	dbCredentials: {
		url: config.get("database.connectionString"),
	},
});
