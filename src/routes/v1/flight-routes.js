const express = require('express');
const { FlightController } = require('../../controllers');
const { FlightMiddlewares }= require('../../middlewares');

const router = express.Router();

router.post('/',FlightMiddlewares.validateCreateRequest,FlightController.createFlightController);

router.get('/',FlightController.getAllFightsController);

router.get('/id/:id',FlightController.getFlightController);

router.patch('/id/:id/seats',FlightController.updateSeats);


module.exports=router;



// type of fetching data from Server side

// Delete 
// Get 
// Put
// Post
// Patch 