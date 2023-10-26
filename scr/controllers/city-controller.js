const {CityService}=require('../services/index');
//to create we use POST and data-> req.body
const cityService=new CityService();
const create=async(req,res)=>{
try {
    const city= await cityService.createCity(req.body);
    return res.status(201).json({
        data:city,
        success:true,
        message:'City is created',
        err:{}
    });
    
} catch (error) {
    console.log(error);
    return res.status(500).json({
        data:{},
        success:false,
        message:'Something went wrong!',
        err:error
    });
}
}
//DELETE then /city/:id
const destroy=async(req,res)=>{
    try {
        const response= await cityService.deleteCity(req.params.id);
    return res.status(200).json({
        data:response,
        success:true,
        message:'City is deleted',
        err:{}
    });
        
    
    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete city!',
            err:error
        });
    }
}
//To get city we use GET method /city/:id
const get=async(req,res)=>{
    try {
        const city= await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:'Successfully got city',
            err:{}
        });
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get  city!',
            err:error
        });
        
    }
}
//update is done using PATCH/PUT -> /city/:id  req.body
const update=async(req,res)=>{
        try {
            const response= await cityService.updateCity(req.params.id, req.body);
            return res.status(200).json({
                data:response,
                success:true,
                message:'Successfully updated city',
                err:{}
            });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update city!',
            err:error
        });
    }
}
const getAll=async(req,res)=>{
    try {
        
        const cities=await cityService.getAllCities(req.query);
        return res.status(200).json({
            data:cities,
            success:true,
            message:'Successfully updated city',
            err:{}
        });    
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the cities!',
            err:error
        }); 
    }
}

module.exports={
    create,destroy,get,update,getAll
}
