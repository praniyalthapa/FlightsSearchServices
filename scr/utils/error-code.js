const ClientErrorCodes=Object.freeze({
    BAD_REQUEST:400,
    UNAUTHORIZED:401,
    NOT_FOUND:404
});
const ServerErrorCodes=Object.freeze({
    INTERNAL_SERVER_ERROR:500,
    NOT_IMPLEMENTED:501

});
const SuccessCodes=Object.freeze({
    OK:200,
    CREATED:201
});
module.exports={
    ClientErrorCodes,ServerErrorCodes,SuccessCodes
}


// obj.a=23;
// 23
// const obj1=Object.freeze({a:20,b:55});
// undefined
// obj1.a=2222;
// 2222
// obj1;
// Object { a: 20, b: 55 }

// obj
// Object { a: 23, b: 23 }
//https://medium.com/swlh/creating-enum-types-in-javascript-fcedf57a323a