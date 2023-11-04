class CrudService{
    constructor(repository){
        this.repository=repository;

    }
    async create(data){
     try {
        const respose=await this.repository.create(data);
        return respose;
        
     } catch (error) {
        console.log("Oops!something went wrong!");
        throw error;
     }
    }
    async destroy(id){
 try {
    const respose=await this.repository.destroy(id);
    return respose;
    
 } catch (error) {
    console.log("Oops!something went wrong!");
        throw error;
    
 }
    }
    async get(id){
        try {
            const respose=await this.repository.get(id);
    return respose;
            
        } catch (error) {
            console.log("Oops!something went wrong!");
        throw error;
        }

    }
    async getAll(){
        try {
            const respose=await this.repository.getAll();
    return respose;
            
        } catch (error) {
            console.log("Oops!something went wrong!");
        throw error;
            
        }

    }
    async update(id,data){
        try {
            const respose=await this.repository.update(id,data);
    return respose;
        } catch (error) {
            console.log("Oops!something went wrong!");
        throw error;
        }

    }
}
module.exports=CrudService;