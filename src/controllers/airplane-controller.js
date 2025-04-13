const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { ErrorResponse,SuccessResponse } = require("../utils/common");

async function createAirplaneController(req, res) {
  try {
   // console.log("In controller level",req.body);
    const response = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
     SuccessResponse.data = response;
       return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);
  } catch (error) {
 //   console.log("Error in the controller",error);
      ErrorResponse.error = error
      return res 
       .status(StatusCodes.INTERNAL_SERVER_ERROR)
       .json(ErrorResponse);
  }
}

async function getAirplanesController (req,res){
  try {
     const airplane = await AirplaneService.getAirplanes();
     SuccessResponse.data= airplane;
     return res
     .status(StatusCodes.OK)
     .json(SuccessResponse.data);
  } catch (error) {
     console.log("Error in fetching airplane controller",error);
     ErrorResponse = error;
     return res
     .status(StatusCodes.INTERNAL_SERVER_ERROR)
     .json(ErrorResponse);
  }
}

async function getAirplaneController(req,res){
  try {
     const response = await AirplaneService.getAirplane(req.params.id);
     SuccessResponse.data= response;
     return res
     .status(StatusCodes.OK)
     .json(SuccessResponse.data)
  } catch (error) {
     console.log("Error in controller layer in fetching ",error);
     const status = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
     ErrorResponse.error=error;
     return res
     .status(status)
     .json(ErrorResponse);
  }
}
async function deleteAirplaneController(req,res){
  try {
     const response = await AirplaneService.deleteAirplane(req.params.id);
     SuccessResponse.data=response;
     return res
     .status(StatusCodes.NO_CONTENT)
     .json(response);
  } catch (error) {
     console.log("Error in delete in controller layer",error);
     ErrorResponse.error=error;
     const status = error.statusCode ;
     return res
     .status(status)
     .json(ErrorResponse)
  }
}

module.exports = {
  createAirplaneController,
  getAirplanesController,
  getAirplaneController,
  deleteAirplaneController
};







