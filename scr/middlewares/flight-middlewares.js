
const {ClientErrorCodes}=require('../utils/error-code');
const valideCreateFlight=(req,res,next)=>{
    if(!req.body.flightNumber || !req.body.airplaneId || !req.body.departureAirportId || !req.body. arrivalAirportId
        || !req.body. arrivalTime || !req.body.departureTime || !req.body.price){
            return res.status(ClientErrorCodes.BAD_REQUEST).json({ //400 bocz it is for bad request it is for not following api contract 
                 data:{},
                 success:true,
                 message:"Request body is invalide for createflight",
                 err:"Mandatory property is missing"
            });

    }
    next();  //if every detail is present then if success is false then next middleware is called
}
module.exports={
    valideCreateFlight
}