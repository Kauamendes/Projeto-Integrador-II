const Sequelize = require('sequelize');
const sequelize = new Sequelize('unhealthy_invaders', 'postgres', 'branet1701', {
    host: 'localhost',
    dialect:'postgres'
  });
 
module.exports = sequelize;