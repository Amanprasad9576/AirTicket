
const dotenv = require('dotenv');

// MUST be called before accessing process.env
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3001
};
console.log('PORT from .env:', process.env.PORT);