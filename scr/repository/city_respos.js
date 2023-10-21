//https://sequelize.org/docs/v7/querying/insert/
const {City}= require('../models/index');
class CityRepository{
    async createCity({name}){ //{name:"kathmandu"} 
        try{
                const city=await City.create({
                    name:name  //
                });
                return city;
        }
        catch(error){
       console.log("Something went wrong!");
       throw{error};
        }
    }
    async deleteCity(cityId){
        try{
            await City.distroy({
                where:{
                    id:cityId
                }
            });
           return true;
        }
        catch(error){
            console.log("Something went wrong!");
            throw{error};
        }

    }
    async updateCity(cityId,data){  //to update a particular city you have to fetch what data you want to update we have passed two parameters cityid and data as there is only one object inside city.js file i.e name
              try {
                const city=await City.update(data,{ ////this .update wants two parameter one is any data and next one is object which have where clause as shown;
                    where:{
                        id:cityId
                    }
                });
              } catch (error) {
                console.log("Something went wrong!");
                throw{error};
              }
    }
    async getCity(cityId){
   try {
    const city=await City.findByPk(cityId);
    return city;
    
   } catch (error) {
    console.log("Something went wrong!");
    throw{error};
   }
    }
   
} 
module.exports=CityRepository;
