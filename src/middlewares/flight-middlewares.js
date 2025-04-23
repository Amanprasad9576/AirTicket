const { ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');

async function validateCreateRequest (req,res,next){
    if(!req.body.flightNumber){
       ErrorResponse.message='Something went wrong',
       ErrorResponse.error={message:'flightNumber is required'}
         return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse);
    }

    if(!req.body.airplaneId){
        ErrorResponse.message='Something went wrong',
        ErrorResponse.error={message:'airplaneId is required'}
          return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);
     }

     if(!req.body.departureAirportId){
        ErrorResponse.message='Something went wrong',
        ErrorResponse.error={message:' departureAirportId is required'}
          return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);
     }

     if(!req.body.arrivalAirportId){
        ErrorResponse.message='Something went wrong',
        ErrorResponse.error={message:'arrivalAirportId is required'}
          return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);
     }

     if(!req.body.arrivalTime){
        ErrorResponse.message='Something went wrong',
        ErrorResponse.error={message:'arrivalTime is required'}
          return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);
     }

     if(!req.body.departureTime){
        ErrorResponse.message='Something went wrong',
        ErrorResponse.error={message:'departureTime is required'}
          return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);
     }

     if(!req.body.price){
        ErrorResponse.message='Something went wrong',
        ErrorResponse.error={message:'price is required'}
          return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);
     }

     if(!req.body.boardingGate){
        ErrorResponse.message='Something went wrong',
        ErrorResponse.error={message:' boardingGate is required'}
          return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);
     }

     if(!req.body.totalSeats){
        ErrorResponse.message='Something went wrong',
        ErrorResponse.error={message:'totalSeats is required'}
          return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);
     }
    next();
     
}
module.exports ={
    validateCreateRequest
}

/*
           flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats

*/