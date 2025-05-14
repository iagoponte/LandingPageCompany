const express = require("express")
const router = express.Router()

const formController = require ('../../controllers/formController')

router.post("/form", formController.createNewContact);

module.exports = router;    