const Joi = require("joi");
const { subscriptionList } = require("../constants/user-constants");

const userSignupSchema = Joi.object({
	email: Joi.string().email().required().messages({
		"any.required": "missing required email field",
	}),
	password: Joi.string().min(3).required().messages({
		"any.required": "missing required password field",
	}),
});

const userSigninSchema = Joi.object({
	email: Joi.string().email().required().messages({
		"any.required": "missing required email field",
	}),
	password: Joi.string().min(3).required().messages({
		"any.required": "missing required password field",
	}),
});

const updateSubscription = Joi.object({
	subscription: Joi.string()
		.valid(...subscriptionList)
		.required()
		.messages({
			"any.required": 'missing field "subscription"',
			"any.only":
				'Invalid subscription type. It should be one of "starter", "pro", or "business"',
		}),
});

module.exports = {
	userSignupSchema,
	userSigninSchema,
	updateSubscription,
};
