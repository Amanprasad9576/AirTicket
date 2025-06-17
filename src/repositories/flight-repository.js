const { Sequelize } = require('sequelize')
const CrudRepository  = require('./crud-repository');
const db = require('../models');
const { Flight,Airport,City,Airplane } = require('../models');
const { addRowLockOnFlights } = require('./queries');

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

        async updateRemainingSeats(flightId, seats, dec = true) {
            const transaction = await db.sequelize.transaction();
            try {
                await db.sequelize.query(addRowLockOnFlights(flightId));
                const flight = await Flight.findByPk(flightId);
                if(+dec) {
                    await flight.decrement('totalSeats', {by: seats}, {transaction: transaction});
                } else {
                    await flight.increment('totalSeats', {by: seats}, {transaction: transaction});
                }
                await transaction.commit();
                return flight;
            } catch(error) {
                await transaction.rollback();
                throw error;
                console.log(error);
            }
           
        }
    }




module.exports = FlightRepository;

// updateRemainingSeat --> what should be required on it 
// flightId, totalSeat , desc in number 
// sequelize has feature to roll back the transcation if any thing transcation
// failure 
