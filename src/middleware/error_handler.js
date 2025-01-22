import Response from "../response.js";

export default async (err, req, res, next) => {
	req.log.error(err);
	res.status(err.status || 500).json(
		new Response({
			err: err.name || "InternalServerError",
			msg:
				err.msg ||
				err.message ||
				"Unknown error occurred while processing the request",
		}),
	);
};
