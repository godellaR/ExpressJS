const knex = require('../../knex');

//Function to get the data

module.exports = async() =>{
    //To update the data
    await knex('Class').where({ id }).update({ strength, section });
}
