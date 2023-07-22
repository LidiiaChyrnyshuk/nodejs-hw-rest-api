const express = require("express");

const contactsController = require("../../controllers/contacts-controller");

const {
	validateBody,
	validateEmptyBody,
	isValidId,
} = require("../../middlewares");

const {
	addSchema,
	contactUpdateFavoriteSchema,
} = require("../../schemas/contacts");

const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:id", isValidId, contactsController.getById);

router.post("/", validateBody(addSchema), contactsController.add);

router.delete("/:id", isValidId, contactsController.deleteById);

router.put(
	"/:id",
	isValidId,
	validateEmptyBody,
	validateBody(addSchema),
	contactsController.updateById
);

router.patch(
	"/:id/favorite",
	isValidId,
	validateBody(contactUpdateFavoriteSchema),
	contactsController.updateStatusContact
);

module.exports = router;
