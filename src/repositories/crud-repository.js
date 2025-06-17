const logger = require("../config/logger-config");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require('http-status-codes');

class CrudRepository {
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
            if(!response){
              throw new AppError('Not able to found data',StatusCodes.NOT_FOUND);   // direct db connection
            }
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
          logger.error('Error in crud repository : get');
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

    async update(id, data) {
      try {
        const [affectedRows] = await this.model.update(data, {
          where: { id }
        });
    
        if (affectedRows === 0) {
          throw new AppError(
            'Airplane not found or no changes made',
            StatusCodes.NOT_FOUND
          );
        }
    
        return await this.model.findByPk(id); // return updated data
      } catch (error) {
        logger.error('Error in crud repository : update');
        throw error;
      }
    }
   
    
    
    
}
module.exports = CrudRepository;



// any raw query goes inside the crud-repository




// why we used constucter and class 
// create ,destroy ,update 