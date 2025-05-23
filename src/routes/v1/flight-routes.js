const express = require('express');
const { FlightController } = require('../../controllers');
const { FlightMiddlewares }= require('../../middlewares');

const router = express.Router();

router.post('/',FlightMiddlewares.validateCreateRequest,FlightController.createFlightController);

router.get('/',FlightController.getAllFightsController);

module.exports=router;