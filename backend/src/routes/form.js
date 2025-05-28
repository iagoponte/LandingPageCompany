const express = require("express")
const router = express.Router()

const formController = require('../controllers/formController')

router.post("/contact", formController.createNewContact);
router.get("/contact", formController.getListContacts);

module.exports = router;    