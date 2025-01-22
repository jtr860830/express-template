import express from "express";
import logger from "pino-http";

import errorHandler from "./middleware/error_handler.js";

const app = express();

app.use(express.json());
app.use(logger());

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.use(errorHandler);

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
