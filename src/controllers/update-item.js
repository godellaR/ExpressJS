const knex = require('../../knex');

//UPDATE THE ORDERS
exports.updateOrder = async (req, res) => {
  const { strength, section } = req.body;
  const id = req.params.id;
  try {
    console.log("id",id);
    await knex('Class').where({ id }).update({ strength, section });
    res.json({ message: 'Order updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}