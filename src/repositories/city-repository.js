const CrudRepository = require('./crud-repository');
const { City } = require('../models');

class CityRepository extends CrudRepository {
    constructor() {
        console.log("City model",City);
        super(City);
    }
}

module.exports = CityRepository;