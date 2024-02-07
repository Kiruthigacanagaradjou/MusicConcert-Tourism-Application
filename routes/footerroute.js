const express = require("express");
const router = express.Router();
const Master = require('../model/master');
const footerController=require("../controller/footercontroller")



router.post('/footer',(req,res)=> footerController.storeFooter(req,res));
router.get('/footer',(req,res)=> footerController.getFooter(req,res));

module.exports=router