const express = require("express");

const authController = require("../../controllers/auth-controller");

const {
	userSigninSchema,
	userSignupSchema,
	updateSubscription,
	userEmailSchema,
} = require("../../schemas/users-schemas");

const {
	validateBody,
	authenticate,
	validateEmptyBody,
	upload,
} = require("../../middlewares/index");

const authRouter = express.Router();

authRouter.post(
	"/register",
	validateBody(userSignupSchema),
	authController.signup
);

authRouter.get("/verify/:verificationToken", authController.verify);

authRouter.post(
	"/verify",
	validateBody(userEmailSchema),
	authController.resendVarifyEmail
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

authRouter.patch(
	"/avatars",
	authenticate,
	upload.single("avatar"),
	authController.updateAvatar
);

module.exports = authRouter;
