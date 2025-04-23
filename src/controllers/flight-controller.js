const { FlightService } = require('../services');
const { ErrorResponse } = require('../utils/common');
const { SuccessResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');

async function createFlightController(req, res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
        });
        SuccessResponse.data = flight;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error=error;
        return res 
                 .status(StatusCodes.BAD_REQUEST)
                 .json(error);
    }
}

async function getAllFightsController(req,res){
    try {
        const flight = await FlightService.getAllFights(req.query);
        SuccessResponse.data = flight;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res 
                 .status(StatusCodes.BAD_REQUEST)
                 .json(error);
    }
}



module.exports = {
   createFlightController,
   getAllFightsController
};
  






















