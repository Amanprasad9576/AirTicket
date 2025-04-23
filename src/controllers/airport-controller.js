const { StatusCodes } = require('http-status-codes');
const { AirportService } = require ("../services");

const ErrorResponse = require('../utils/common/error-response');
const SuccessResponse = require('../utils/common/success-response');

async function createAirportController(req, res) {
    try {
        console.log("Passing in controller:", req.body);
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code?.trim(),
            address: req.body.address,
            cityId: req.body.cityId
        });
        console.log("Received in controller:", req.body);
        console.log('code',req.body.code);

        SuccessResponse.data = airport;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getAirportsController(req, res) {
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getAirportController(req,res){
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data=airport;
        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
        console.log('Error in get airport',error);
        return res 
                 .status(StatusCodes.error)
                 .json(ErrorResponse);
    }
}

   
async function deleteAirportController(req,res){
    try {
       const airport = await AirportService.deleteAirport (req.params.id);
       SuccessResponse.data=airport;
       return  res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
       console.log('Error in delete controller layer',error); 
       ErrorResponse.error = error;
       return res
              .status(error.StatusCodes)
              .json(ErrorResponse);
    }
}
async function updateAirportController(req,res){
    try {
        const airport = await AirportService.updateAirport ({
            id : req.params.id,
            data: req.body.data
        });
        SuccessResponse.data=airport;
        return  res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse); 
    } catch (error) {
        console.log('Error in update controller layer',error); 
        ErrorResponse.error = error;
        return res
               .status(error.StatusCodes)
               .json(ErrorResponse);
    }
}

module.exports = {
    createAirportController,
    deleteAirportController,
    getAirportsController,
    getAirportController,
    updateAirportController
}


/*
 There is an error in createAirport that code should not be null
 where code is pass through the res.body

 There is an error in updateAirport 
 See it 
*/