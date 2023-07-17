const Joi = require("joi");

const addSchema = Joi.object({
	name: Joi.string().required().messages({
		"any.required": 'missing required "name" field',
	}),
	email: Joi.string().email().required().messages({
		"any.requred": 'missing required "email" field',
	}),
	phone: Joi.string().required().messages({
		"any.requred": 'missing required "phone" field',
	}),
})
	.required()
	.messages({
		"any.requred": "missing fields",
	});

module.exports = {
	addSchema,
};
