import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./migrations",
	schema: "./src/database/schema.js",
	dialect: "postgresql",
	dbCredentials: {
		url: "",
	},
});
