const express = require('express');
const bodyParser = require('body-parser');
const knex = require('../knex'); // Path to Knex instance
const itemRouter = require("./routers/itemRoutes");

const app = express();
app.use(bodyParser.json());

//Routes
app.use("/api/v1/orders",itemRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
