const express = require("express");

const authController = require("../../controllers/auth-controller");

const {
	userSigninSchema,
	userSignupSchema,
	updateSubscription,
} = require("../../schemas/users-schemas");

const {
	validateBody,
	authenticate,
	validateEmptyBody,
} = require("../../middlewares/index");

const authRouter = express.Router();

authRouter.post(
	"/register",
	validateBody(userSignupSchema),
	authController.signup
);

authRouter.post(
	"/login",
	validateBody(userSigninSchema),
	authController.signin
);

authRouter.get("/current", authenticate, authController.current);

authRouter.post("/logout", authenticate, authController.signout);

authRouter.patch(
	"/",
	authenticate,
	validateEmptyBody,
	validateBody(updateSubscription),
	authController.updateUserSubscription
);

module.exports = authRouter;
