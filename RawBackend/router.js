const express = require("express");
const controllers = require("./controller");
const router = express.Router();

router.get("/getAllPayments", controllers.getAllPayments);

router.post("/addPayment", controllers.addPayment);

module.exports = router;
