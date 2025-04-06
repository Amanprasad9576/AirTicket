const express = require('express');

const router = express.Router();

const { infoController } = require('../../controllers');

router.get('/info',infoController.info);

module.exports = router;



// pattern for routering    api --> v1 --> info 
// http://localhost:3001/api/v1/info
// http://localhost:3001/api/v1/info
// Nodemon is a tool that that watch the code while chaning
// in code and run the automatically it