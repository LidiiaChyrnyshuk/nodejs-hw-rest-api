const { HttpError } = require("../helpers");

const validateIsEmptyBody = (schema) => {
	const func = (req, res, next) => {
		if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
			next(HttpError(400, "missing fields"));
		}
		next();
	};
	return func;
};

module.exports = validateIsEmptyBody;
