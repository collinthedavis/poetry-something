const { Sequelize } = require('sequelize');

// Initialize Sequelize with your MySQL database credentials
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
    // Other options if needed
});

module.exports = sequelize;