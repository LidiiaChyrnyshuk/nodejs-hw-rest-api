const { HttpError } = require("../helpers");

const validateBody = (schema) => {
	const validate = (req, res, next) => {
		const isEmptyBody = Object.keys(req.body).length === 0;
		if (isEmptyBody) {
			next(HttpError(400, "missing fields"));
		}
		const { error } = schema.validate(req.body);
		if (error) {
			next(HttpError(400, error.message));
		}
		next();
	};
	return validate;
};

module.exports = validateBody;
