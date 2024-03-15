const express = require("express");
const getController = require("../controllers/get-order-controller");
const router = express.Router();

//Routing
router.route("/list").get(getController.getAllOrders);

module.exports = router;
