const express = require("express");
const cors=require('cors')
const router = express.Router();
const userController = require("../controller/usercontroller");
const usercontrollertemplate=require('../controller/templates/usercontroller')
const middleware = require('../middleware/auth.middleware');

router.post("/signup",(req,res)=>userController.signupUser(req,res));
router.get("/sign", (req,res)=>userController.getSignup(req,res));
router.get("/log", (req,res)=>userController.getLogin(req,res));
router.put('/updatepassword',(req,res)=>userController.updatePassword(req,res));

router.post("/login",(req,res,next)=>{
    console.log("login called")
    next()
},userController.loginUser)

router.get("/template/signup",usercontrollertemplate.getSignup)
router.get("/template/login",usercontrollertemplate.getLogin)
router.get("/template/concert",usercontrollertemplate.getConcert)
router.get("/template/tour",usercontrollertemplate.getTour)
router.get("/template/contact",usercontrollertemplate.getContact)
router.get("/template/forgot",usercontrollertemplate.getForgot)
//router.get("/template/user",usercontrollertemplate.getUser)
//middleware.checkisAdmin,middleware.authMiddleware
router.get("/template/user",middleware.checkisAdmin,middleware.authMiddleware,usercontrollertemplate.getAdmin)
router.get("/template/home",middleware.checkisAdmin,middleware.authMiddleware,usercontrollertemplate.getHome)
router.post("/template/postlogin",usercontrollertemplate.postLogin)


module.exports = router;
