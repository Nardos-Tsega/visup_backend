const express = require("express");
const router = express.Router();
const { getUsers } = require("../Controllers/User.controller");

router.get("/", getUsers);

module.exports = router;
