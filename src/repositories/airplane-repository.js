const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");


class AirplaneRepository extends CrudRepository {
  constructor() {
    console.log("Airplane Model:", Airplane);

    super(Airplane);
  }
}

module.exports = AirplaneRepository;


// extends --> all the feature having crudRepository 
// comes to AirplaneRepository 
// super --> it is a keyword that show the super class