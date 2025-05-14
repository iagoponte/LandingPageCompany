const express = require("express")
const router = express.Router()

const formController = require('../controllers/formController')

router.post("/contact", formController.createNewContact);

module.exports = router;    