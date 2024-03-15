const express = require("express");
const updateController = require("../controllers/update-order-controller");
const router = express.Router();

//Routing
router.route("/update/:id").put(updateController.updateOrder);

module.exports = router;
