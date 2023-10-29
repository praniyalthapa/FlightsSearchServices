const express=require('express');
const  {PORT}=require('./config/serverConfig');
const ApiRouters=require('./routers/index');
// const CityRepository=require('./repository/city_respos');
const db=require('./models/index');
//const { Airplane}=require('./models/index');
//const sequelize=require('sequelize');
const bodyParser=require("body-parser");

const setupAndStartServer=async()=>{
//create the express object
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',ApiRouters);

app.listen(PORT,async()=>{
    console.log(`Server started at  ${PORT}`);
    if (process.env.SYNC_DB){
        db.sequelize.sync({alter:true});     //https://sequelize.org/docs/v7/models/model-synchronization/
    } 
    // await Airplane.create({
    //     modelNumber:'A321 NEO'
    // });
});

}
setupAndStartServer();