const CrudRepository=require('./crud-repository');
const {Airport}=require('../models/index');
class AirportRepository extends CrudRepository{
    constructor(){
   super(Airport);
    }
}


module.exports=AirportRepository;
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