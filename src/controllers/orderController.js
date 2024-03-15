const express = require('express');
const bodyParser = require('body-parser');
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