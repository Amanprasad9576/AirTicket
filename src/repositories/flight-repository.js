const { Sequelize } = require('sequelize')
const CrudRepository  = require('./crud-repository');

const { Flight,Airport,City,Airplane } = require('../models');

class FlightRepository extends CrudRepository {
    constructor(){
        console.log('Fight model',Flight);
        super(Flight)
    }

        async getAllFlights(filter, sort) {
            const response = await Flight.findAll({
                where: filter,
                order: sort,
                include: [
                    {
                        model: Airplane,
                        required: true,
                        as: 'airplaneDetail',
                    },
                    {
                        model: Airport,
                        required: true,
                        as: 'departureAirport',
                        on : {
                            col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
                        },
                        include: {
                            model: City,
                            required: true
                        }
                    },
                    {
                        model: Airport,
                        required: true,
                        as: 'arrivalAirport',
                        on : {
                            col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                        },
                        include: {
                            model: City,
                            required: true
                        }
                    }
                ]
            });
            return response;
        }
}   


module.exports = FlightRepository;
