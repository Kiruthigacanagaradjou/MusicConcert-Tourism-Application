const Users=require("../model/user")
class UserService{
    loginUser(req, res) {
        console.log("login in")
        return new Promise(async(resolve,reject)=>{
            try{
               console.log("login controller called")
               const { email, password } = req.body;
               console.log(req.body)
               let userData=await Users.find({}).lean()
               const user = userData.find(user => user.email === email && user.password === password);
               if (user) {
                   const authdata=user.email+":"+user.password+":"+user.role
                   console.log("i am in user controller called")
                   resolve({token:btoa(authdata)});
               } else {
                   reject({ message: 'Not a valid user.' });
               }
            }catch(error){
               reject(error)
               console.error('Error finding user:', error);
               res.status(500).json({ message: 'Internal server error' });
            }   
           })
       
      }

}

module.exports=new UserService()