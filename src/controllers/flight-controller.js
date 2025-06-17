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
 
async function getFlightController (req,res){
    try {
        const flight = await FlightService.getFlight(req.params.id);
        SuccessResponse.data = flight;
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse.data);
    } catch (error) {
       ErrorResponse = error;
       console.log('Error in get flight controller',error);
       return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error);
    }
}

async function updateSeats(req, res) {
    try {
        console.log(req.body);
        const response = await FlightService.updateSeats({
            flightId: req.params.id,
            seats: req.body.seats, 
            dec: req.body.dec
        });
        console.log(req.body);

        SuccessResponse.data = response;
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




module.exports = {
   createFlightController,
   getAllFightsController,
   getFlightController,
   updateSeats
};
  






















