const knex = require('../../knex');
const updateData = require('../data-access/update-order')

//UPDATE THE ORDERS
exports.updateOrder = async (req, res) => {
  const { strength, section } = req.body;
  const id = req.params.id;
  try {
    console.log("id",id);
    const Order = await updateData;
    res.json({ message: 'Order updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}