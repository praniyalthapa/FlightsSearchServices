//https://sequelize.org/docs/v7/querying/insert/
const {City}= require('../models/index');
class CityRepository{
    async createCity({name}){ //{name:"kathmandu"} 
        try{
                const city=await City.create({
                    name  
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




    async updateCity(cityId, data) { // {name: "Prayagraj"}
        try {
            // The below approach also works but will not return updated object
            // if we are using Pg then returning: true can be used, else not
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     },
            //      
            // });
            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
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
