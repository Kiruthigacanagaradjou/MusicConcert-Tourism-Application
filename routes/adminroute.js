const express = require("express");
const cors=require('cors')
const router = express.Router();
const adminController = require("../controller/admincontroller");

//router.post("/login",(req,res)=>adminController.loginUser(req,res));

router.get("/allusers", (req,res)=>adminController.getUser(req,res));

// router.post("/login",(req,res,next)=>{
//     console.log("signin called ")
//     next()
// },adminController.loginUser)
//router.post('/updateUser',(req,res)=>adminController.updateUser(req,res));
router.post('/updateUser',(req,res)=>adminController.updateUser(req,res));
router.delete('/deleteUser/:id',(req,res)=>adminController.deleteUser(req,res));

module.exports = router;