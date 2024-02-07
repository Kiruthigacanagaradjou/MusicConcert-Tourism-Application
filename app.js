const mongoose = require('mongoose');
const express = require("express");
const session=require('express-session')
const app = express();
const cookieparser=require('cookie-parser')
const cors=require('cors')
const jade=require('jade')
const path=require('path')
const adminController = require("./controller/admincontroller");
const mongooseconnection = require('./util/mongooseconnection')
mongooseconnection.connect()

app.set("views",path.join(__dirname,"views"))
app.set('view engine',"jade")

//console.log(jade.renderFile("./views/home.jade",{name:"kiru"}))

const userrouter = require("./routes/userroute");
const footerrouter = require("./routes/footerroute")
const adminrouter = require("./routes/adminroute")
const Users=require('./model/user')

app.use(cookieparser())
app.use(session({secret:"secretkey",resave:false,saveUninitialized:false}))

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static("./public"));

app.use((req,res,next)=>{
  req.query.timestamp=new Date()
  req.body.timestamp=new Date()
  next()
})

// app.use("/:param1",(req,res,next)=>{
//   console.log(req.params,req.query,req.body)
//   console.log(req.session.email)
//   next()
// })

//app.use('/api/users',adminrouter)


app.use('/api/admin/',adminrouter)
app.use('/api/',(req,res,next)=>{
  next()
},userrouter)

app.use('/api/',footerrouter)//footerrouter
//app.use('/api/up',adminrouter)
// app.use('/api/admin/',adminrouter)
//app.use('/api/users/',adminrouter)

// async function adminMiddleware (req,res,next){
//       console.log("adminmiddleware")
//       const binarydata=Buffer.from(req.headers.auth,"base64")
//       const userdata=binarydata.toString("utf-8").split(':')
//       //const {email,password,role}=req.session
//       //console.log(req.session.role)
//       const email=userdata[0]
//       const password=userdata[1]
//       const role=userdata[2]
//       let userData=await Users.find({}).lean()
//       const user = userData.find(user => user.email === email && user.password === password && user.role === "admin");
//       if (user) {
//         console.log("im in if(user)")
//           next()
//       }
//       else{
//           res.status(401).json({message:"Unauthorized"})
//       }
// }


// app.use("/api/", userrouter);
// app.use("/api/",footerrouter)
// app.use("/api/",adminrouter)


app.listen(3001, () => {
  console.log("Server running on port 3001");
});
