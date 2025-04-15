const express = require('express');
const router = express.Router();
const { InfoController } = require('../../controllers');

const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');

router.get('/info',InfoController.info);
router.use('/airplanes',airplaneRoutes);
router.use('/cities',cityRoutes);

module.exports = router;





// pattern for routering    api --> v1 --> info 
// http://localhost:3001/api/v1/info
// http://localhost:3001/api/v1/info
// Nodemon is a tool that that watch the code while chaning
// in code and run the automatically it