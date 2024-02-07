const Users=require('../model/user')
class AdminService{
    allusers(req) {
        return new Promise( async(resolve,reject)=>{
           try{
            const userData=await Users.find({isActive:true})
            console.log(userData)
            resolve(userData)
           }catch(error){
            console.log(error)
            reject(error)
           }
        }) 
    }
}

module.exports=new AdminService()