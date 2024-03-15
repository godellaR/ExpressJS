const knex = require('../../knex');

//GET ALL THE ORDERS
exports.getAllOrders = async (req, res) => {
    try {
      console.log("Order List");
      const Order = await knex('Class').select('*');
      console.log("Order",Order);
      res.json(Order);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
};
