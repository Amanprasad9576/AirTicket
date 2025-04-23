const CrudRepository  = require('./crud-repository');
const { Flight } = require('../models');

class FlightRepository extends CrudRepository {
    constructor(){
        console.log('Fight model',Flight);
        super(Flight)
    }

    async getAllFights(filter){
       try {
         const flight = await Flight.findAll({
            where:filter
         });
         return flight;
       } catch (error) {
          console.log('Error in repository',error);
       }
    }

}
module.exports = FlightRepository;