const fs = require('fs');
const cors=require('cors')
const path=require('path')
const Users=require('../../model/user')
const Master=require('../../model/master')
const mongoose=require('mongoose')
const userservice=require('../../service/userservice')
const adminservice=require('../../service/adminservice')

function UserController(){



}
UserController.prototype.postLogin=function (req,res){
    try{
        userservice.loginUser(req)
        .then((token)=>{
           //res.render("home.jade",{token})
           res.status(200).json(token)
        }).catch((error)=>{
          console.log(error)
          res.render("500.jade")
        })
       }catch(error){
           console.log(error)
           res.render("500.jade")
       }
}

// UserController.prototype.getLogin=function (req,res){
//     try{
//         userservice.signin(req)
//         .then((token)=>{
//            res.render("home.jade",{name:"Kiru"})
//         }).catch((error)=>{
//           console.log(error)
//           res.render("500.jade")
//         })
//        }catch(error){
//            console.log(error)
//            res.render("500.jade")
//        }
// }

UserController.prototype.getLogin=function(req,res){
    try{
        res.render("demo.jade",{name:"kika"})
       }catch(error){
           console.log(error)
           res.render("500.jade")
       }
}

UserController.prototype.getHome=function(req,res){
    try{
        let token=req.query.token
        res.render("home.jade",{token})
       }catch(error){
           console.log(error)
           res.render("500.jade")
       }
}

UserController.prototype.getSignup =function(req,res){
    try{
        res.render("signup.jade",{name:"kika"})
    }catch(error){
        console.log(error)
        res.render("500.jade")
    }

}

UserController.prototype.getConcert=function(req,res){
    try{
        let token=req.query.token
        res.render("concert.jade",{token})
       }catch(error){
           console.log(error)
           res.render("500.jade")
       }
}

UserController.prototype.getContact=function(req,res){
    try{
        let token=req.query.token
        res.render("contact.jade",{token})
       }catch(error){
           console.log(error)
           res.render("500.jade")
       }
}

UserController.prototype.getForgot=function(req,res){
    try{
        let token=req.query.token
        res.render("forgot.jade",{token})
       }catch(error){
           console.log(error)
           res.render("500.jade")
       }
}

UserController.prototype.getTour=function(req,res){
    try{
        let token=req.query.token
        res.render("tour.jade",{token})
       }catch(error){
           console.log(error)
           res.render("500.jade")
       }
}

UserController.prototype.getUser=function(req,res){
    try{
        let token=req.query.token
        res.render("user.jade",{token})
       }catch(error){
           console.log(error)
           res.render("500.jade")
       }
}

UserController.prototype.getAdmin=function(req,res){
    try{
        console.log("i am in getadmin")
        adminservice.allusers(req)
        .then((userdata)=>{
            console.log(userdata)
            res.render("user.jade",{userdata})
        }).catch((error)=>{
            console.log(error)
            res.render("500.jade")
        })
       }catch(error){
           console.log(error)
           res.render("500.jade")
       }
}

module.exports = new UserController();