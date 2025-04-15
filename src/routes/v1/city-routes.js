const express = require('express');
const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');
const router = express.Router();

router.post('/',CityController.createCityController);

router.put('/id/:id',CityMiddlewares.validateCreateRequest,CityController.updateCityController);

router.delete('/id/:id',CityController.deleteCityController);

module.exports = router;