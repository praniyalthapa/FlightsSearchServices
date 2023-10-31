//In reposity folder if we export 10 different folder then in other folder we have to require all 10 file one by one.
//so we have made this folder to export all those folder at once so that we have to require only once in another folder like in city_service.js file
module.exports={
    CityRepository: require('./city_respos'),
    FlightRepository: require('./flight-repos'),
    AirplaneRepository:require('./airplane-repos')

}