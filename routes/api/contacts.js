const express = require("express");

const contactsController = require("../../controllers/contacts-controller");

const {
	validateBody,
	validateEmptyBody,
	isValidId,
	authenticate,
} = require("../../middlewares");

const {
	addSchema,
	contactUpdateFavoriteSchema,
} = require("../../schemas/contacts");

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:id", isValidId, contactsController.getById);

contactsRouter.post("/", validateBody(addSchema), contactsController.add);

contactsRouter.delete("/:id", isValidId, contactsController.deleteById);

contactsRouter.put(
	"/:id",
	isValidId,
	validateEmptyBody,
	validateBody(addSchema),
	contactsController.updateById
);

contactsRouter.patch(
	"/:id/favorite",
	isValidId,
	validateBody(contactUpdateFavoriteSchema),
	contactsController.updateStatusContact
);

module.exports = contactsRouter;
