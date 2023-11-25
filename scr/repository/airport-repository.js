const CrudRespository = require('./crud-repository');
const { Airport } = require('../models/index');
class AirportRespository extends CrudRespository {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRespository;
//simple concept
// class A{
//     printf(){
//         console.log("hurray!");
//     }
    
// }
// class B extends A{
//     constructor(){
//         super();
//     }
    
// }
// const obj=new B();
// obj.printf();