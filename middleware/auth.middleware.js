const Users = require('../model/user')

function checkisAdmin(req,res,next){
    const authtoken=req.query.auth?req.query.auth:null
    if(authtoken){
        const binarydata=Buffer.from(req.query.auth,"base64")
        const userdata=binarydata.toString("utf-8").split(':')
        console.log(userdata)
        // const {email,password,role}={userdata[0],userdata[1],userdata[2]}
        const email=userdata[0]
        const password=userdata[1]
        const role=userdata[2]
        if(role=="admin"){
            next()
        }else{
            res.json({error:"unauthorized"})
        }
    }else{
        res.json({error:"unauthorized"})
    }
}

async function authMiddleware(req,res,next){
    console.log(req.headers)
    const authtoken=req.query.auth?req.query.auth:null
   // console.log("adminmiddleware")
    if(authtoken){
        const binarydata=Buffer.from(req.query.auth,"base64")
        const userdata=binarydata.toString("utf-8").split(':')
        console.log(userdata)
        // const {email,password,role}={userdata[0],userdata[1],userdata[2]}
        const email=userdata[0]
        const password=userdata[1]
        const role=userdata[2]
        let userData=await Users.find({}).lean()
        const user = userData.find(user => user.email === email && user.password === password && user.role === role);
              if (user) {
                console.log("Im in if(user)")
                  next()
              }else{
                console.log("middleware error")
                res.status(401).json({message:"Unauthorized"})
              }
    }else{
        res.status(401).json({message:"Unauthorized"})
    }
  }

  module.exports={authMiddleware,checkisAdmin}