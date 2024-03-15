const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();


router.route("/list").get(orderController.getAllOrders);

router.route("/update/:id").put(orderController.updateOrder);



module.exports = router;
