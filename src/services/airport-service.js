const { StatusCodes } = require('http-status-codes');
const { AirportRepository } = require('../repositories');
const  AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        const airport = await airportRepository.create(data);
        console.log('airport detail in service',airport);
        return airport;

    } catch(error) {
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {

                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airport object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirport(data){
    try {
      const airport = await airportRepository.destroy(data);
      return airport;
    } catch (error) {
       console.log('Error in delete the airport',error);
        throw error;
    }
}

async function getAirport(id){
    try {
        const airport = await airportRepository.get(id);
        return airport
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports() {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch(error) {
        throw new AppError('Cannot fetch data of all the airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id,data){
    try {
        const airport = await airportRepository.update(id,data)
        return airport;
    } catch (error) {
        console.log('Error in update');
        throw new AppError('Cannot fetch data of the airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}




module.exports = {
    createAirport,
    deleteAirport,
    getAirports,
    getAirport,
    updateAirport

}
  