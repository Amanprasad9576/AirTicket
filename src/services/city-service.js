const  CityRepository  = require('../repositories/city-repository');
const cityRepository = new CityRepository();

async function createCity(data){
    try {
      const city = await cityRepository.create(data);
      return city; 
    } catch (error) {
      console.log("Error in creating city service",error);
       throw error;
    }
}

async function updateCity({id,data}){
  try {
      const city = await cityRepository.update(id,data)
      return city;
  } catch (error) {
      console.log("Error in updating city name in service layer",error);
      throw error;
  }
}

async function deleteCity(data){
  try {
     const city = await cityRepository.destroy(data);
      return city
  } catch (error) {
      console.log("Error in delete city name in service error",error);
      throw error;
  }
}

module.exports = {
    createCity,
    updateCity,
    deleteCity
}


// Think about it while updating the city name 
//  search by id and update the name of city by city