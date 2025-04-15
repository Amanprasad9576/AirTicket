const { StatusCodes }  = require("http-status-codes");
const { ErrorResponse,SuccessResponse } = require("../utils/common");
const { CityService } = require ("../services");

async function createCityController(req, res) {
    try {
      const city = await CityService.createCity({
           name:req.body.name
      }); 
      SuccessResponse.data = city;
      return res
                .status(StatusCodes.OK)
                .json(SuccessResponse); 
    } catch (error) {
      console.log("Error in creating city ", error);
      ErrorResponse.error = error;
      return res
              .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse); 
    }
  }
  
  async function updateCityController(req, res) {
    try {
      const city = await CityService.updateCity({
        id: req.params.id,
        data: req.body
      });
  
      SuccessResponse.data = city;
      return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
      console.log("Error in updating city name controller layer", error);
      const status = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  
      ErrorResponse.message = "Failed to update city";
      ErrorResponse.error = {
        statusCode: status,
        explanation: error.explanation || "Something went wrong"
      };
  
       return res
             .status(status)
             .json(ErrorResponse);
    }
  }

  async function deleteCityController(req,res){
    try {
        const city = await CityService.deleteCity(req.params.id);
        SuccessResponse.data= city
        return res
                 .status(StatusCodes.OK)
                 .json(SuccessResponse);
    } catch (error) {
       console.log("Error in deleting city in controller layer",error);
       ErrorResponse.error=error;
       return res 
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse);
    }
  }
  

module.exports = {
    createCityController,
    updateCityController,
    deleteCityController
}