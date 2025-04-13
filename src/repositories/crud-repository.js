const logger = require("../config/logger-config");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require('http-status-codes');

class CrudRepository{
    constructor(model){
      this.model=model
    }
    async create(data){
        try {
          console.log("Received in repository create:", data);

           const response = await this.model.create(data);
           console.log(response);
           return response;
        } catch (error) {
          logger.error('Error in crud repository :create ');
          console.log(error);
          throw error;
        }
    }

    async destroy(data){
        try {
           const response = await this.model.destroy({
               where:{
                  id:data
               }
            });
           return response;
        } catch (error) {
          logger.error('Error in crud repository : Destory ');
          throw error;
        }
    }

    async get(data){
        try {
           const response = await this.model.findByPk(data); 
            if(!response){
              throw new AppError('Not able to found response',StatusCodes.NOT_FOUND);
            }
           return response;
        } catch (error) {
          logger.error('Error in crud repository : get ');
          throw error;
        }
    }
    async getAll(){
        try {
           const response = await this.model.findAll();
           return response;
        } catch (error) {
          logger.error('Error in crud repository : getAll ');
          throw error;
        }
    }

    async update(id,data){
        try {
           const response = await this.model.update(data,{
              where :{
                  id:id
              }
            });
           return response;
        } catch (error) {
          logger.error('Error in crud repository : getAll ');
          throw error;
        }
    }
}
module.exports = CrudRepository;



// any raw query goes inside the crud-repository




// why we used constucter and class 
// create ,destroy ,update 