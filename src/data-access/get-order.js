const knex = require('../../knex');

//Function to update the data

module.exports = async() =>{
    //To update the data of table Class.
    await knex('Class').select('*')
}
