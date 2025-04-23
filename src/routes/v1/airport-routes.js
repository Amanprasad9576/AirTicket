const  express  = require('express');
const { AirportController } = require('../../controllers');
const { AirportMiddlewares } = require('../../middlewares');

const router = express.Router();


router.post(
    '/',
    AirportMiddlewares.validationCreateRequest,  
    AirportController.createAirportController    
  );
  

router.delete('/id/:id',AirportController.deleteAirportController);

router.get('/',AirportController.getAirportsController);

router.get('/id/:id',AirportController.getAirportController);


module.exports = router;
