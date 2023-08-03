const { Schema, model } = require("mongoose");
const { handleSaveError, handleUpdateValidate } = require("./hooks");
const { subscriptionList } = require("../constants/user-constants");

const userSchema = new Schema(
	{
		password: {
			type: String,
			required: [true, "Set password for user"],
		},
		email: {
			type: String,

			required: [true, "Email is required"],
			unique: true,
		},
		subscription: {
			type: String,
			enum: subscriptionList,
			default: "starter",
		},
		token: {
			type: String,
			default: "",
		},
		avatarURL: {
			type: String,
			required: true,
		},
	},
	{ versionKey: false }
);

userSchema.pre("findOneAndUpdate", handleUpdateValidate);
userSchema.post("save", handleSaveError);
userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);

module.exports = User;
