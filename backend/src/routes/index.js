const express = require("express")
const router = express.Router()

router.use("/api", require("./form"))


module.exports = router