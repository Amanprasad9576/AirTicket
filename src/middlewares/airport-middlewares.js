const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');

function validationCreateRequest(req, res, next) {
    if (!req.body.name) {
        ErrorResponse.message = 'Something went wrong';
        ErrorResponse.error = { explanation: 'Name not found in input data' };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (!req.body.code) {
        ErrorResponse.message = 'Something went wrong';
        ErrorResponse.error = { explanation: 'Code not found in input data' };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (!req.body.cityId) {
        ErrorResponse.message = 'Something went wrong';
        ErrorResponse.error = { explanation: 'CityId not found in input data' };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next(); // all good, move to controller
}

module.exports =  {
      validationCreateRequest
 }



// creating an Airport requirement of it
// name 
// code
// cityId


// A city has many airport 
// then city is parent table and airport has child table
//