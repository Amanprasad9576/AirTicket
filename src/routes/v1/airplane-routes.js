const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares')

const router = express.Router();
console.log('Hitting airplane POST route');

// /api/v1/airplanes POST
router.post('/', 
        AirplaneMiddlewares.validateCreateRequest,
        AirplaneController.createAirplaneController);

// /api/v1/airplanes GET
router.get('/', AirplaneController.getAirplanesController);

// /api/v1/airplanes/id/:id GET
router.get('/id/:id',AirplaneController.getAirplaneController);

// /api/v1/airplanes/id/:id DELETE
router.delete('/id/:id',AirplaneController.deleteAirplaneController);


// PUT  -->api/v1/airplanes/id/:id
router.put('/id/:id',AirplaneController.updateAirplaneController);


module.exports = router;


// http://localhost:3000/api/v1/airplanes
// http://localhost:3000/api/v1/info