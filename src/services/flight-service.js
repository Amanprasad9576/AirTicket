const { FlightRepository } = require('../repositories');

const flightRepository = new FlightRepository();

async function createFlight(data){
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
       console.log('Error in creating flight',error);
    }
}

async function getAllFights(query){
    let customFilter = {};
    // trips --> "MUM-DEL"
    if(query.trips){
     [departureAirportId,arrivalAirportId] = query.trips.split("-"); 
     customFilter.departureAirportId = departureAirportId;
     customFilter.arrivalAirportId = arrivalAirportId;
    }
    try {
      const flight = await flightRepository.getAllFights(customFilter);
      return flight 
    } catch (error) {
        console.log('Error in service layer',error);
    }
}


module.exports = {

    createFlight,
    getAllFights

}


/*

class AppError extends Error {
    constructor(message,statusCode){
      super(message);
      this.statusCode =statusCode;
      this.explaination = message;
    }
}
module.exports = AppError;

*/









