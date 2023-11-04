const {AirportService}=require('../services/index');
const airportService=new AirportService();
const create=async (req,res)=>{
    try {
        const respose=await airportService.create(req.body);
        return res.status(201).json({
            message:"Successfully created the airport",
            err:{},
            data:respose,
            success:true
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:"Sorry not able to create new airport"
        })
        
    }
}


module.exports={
   create

}

