const { HttpError } = require("../helpers");

const validateEmptyBody = async (req, res, next) => {
	const isEmptyBody = Object.keys(req.body).length === 0;

	if (isEmptyBody) next(HttpError(400, "missing fields"));

	next();
};
module.exports = validateEmptyBody;
