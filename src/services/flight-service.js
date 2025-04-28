const { FlightRepository } = require('../repositories');
const { Op } = require('sequelize');  

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
    let sortFilter = [];
    const endingTripTime = " 23:59:00";
    // trips --> "MUM-DEL"
    if(query.trips){
     [departureAirportId,arrivalAirportId] = query.trips.split("-"); 
     customFilter.departureAirportId = departureAirportId;
     customFilter.arrivalAirportId = arrivalAirportId;
    }
    // price -->'2000-20000'

    if(query.price) {
      [minPrice, maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]: [minPrice, ((maxPrice == undefined) ? 20000: maxPrice)]
        }
    }

    // traveller --> 'total seats'
    if(query.travellers){
        customFilter.totalSeats = {
           [Op.gte]:query.travellers
        }
    }

    if(query.tripDate) {
        customFilter.departureTime = {
            [Op.between]: [query.tripDate, query.tripDate + endingTripTime]
        }
    }

    if(query.sort){
        const params = query.sort.split(',');
        const sortFilters = params.map((param) => param.split('_'));
        sortFilter = sortFilters

    }

    try {
      const flight = await flightRepository.getAllFlights(customFilter,sortFilter);
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









