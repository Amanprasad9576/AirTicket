const { StatusCodes } = require("http-status-codes");
const  { AirplaneRepository }  = require("../repositories");
//const { SuccessResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

// Instantiate the repository
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
  //  console.log("In service layer",data);
    const response = await airplaneRepository.create(data);
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error in service layer",error);
    throw error;
  }
}

async function getAirplanes(){
  try {
     const response = await airplaneRepository.getAll();
     return response;
  } catch (error) {
     console.log("Error in service layer in fetching airplanes",error)
      throw error;
  }
}
 
async function getAirplane(id){
  try {
     const response = await airplaneRepository.get(id);
     return response;
  } catch (error) {

     if(error.statusCode === StatusCodes.NOT_FOUND){
       throw new AppError('The airplane you request is not found',StatusCodes.NOT_FOUND);
     }
      
     console.log("Error in fetching airplane detail in servoice",error);
     throw error;
  }
}

async function deleteAirplane(id){
  try {
    const response = await airplaneRepository.destroy(id);
    return response;
  } catch (error) {
    if(error.statusCode === StatusCodes.NOT_FOUND){
       throw new AppError('The airplane data is not found',StatusCodes.NOT_FOUND);
    }
     console.log("Error in delete in service layer");     // custom error
     throw error;
  }
}

async function updateAirplane({id,data}){
  try {
      const airplane = await airplaneRepository.update(id,data);
      return airplane;
  } catch (error) {
     console.log("Error in update airplane service layer",error);
     throw error;
  }
}

//  Export as an object
module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane
};

