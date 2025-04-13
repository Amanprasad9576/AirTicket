const express = require('express');

const { airplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares')

const router = express.Router();

// POST --> api/v1/airplanes
router.post('/',AirplaneMiddlewares.validateCreateRequest,airplaneController.createAirplaneController);

// GET --> api/v1/airplanes
router.get('/',airplaneController.getAirplanesController);


// GET --> api/v1/airplanes/id
router.get('/id/:id',airplaneController.getAirplaneController);


module.exports = router;


// http://localhost:3000/api/v1/airplanes
// http://localhost:3000/api/v1/info