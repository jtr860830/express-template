import express from "express";
import logger from "pino-http";
import config from "config";

import errorHandler from "./middleware/error_handler.js";

const app = express();
const host = config.get("host");
const port = config.get("port");

app.use(express.json());
app.use(logger());

app.get("/", (req, res) => {
	res.send("Hello World");
});

// error handler should be the last middleware
app.use(errorHandler);

app.listen(port, host, () => {
	console.info({ msg: `server is running on http://${host}:${port}` });
});
