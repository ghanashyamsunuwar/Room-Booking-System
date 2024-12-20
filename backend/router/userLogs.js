const express = require("express");
const router = new express.Router();

const email = require("./createUser")
const userLogin = require("../models/userLogin");




router.post("/userLogs/:userEmail", async (req,res) => {

//to get data on response server -> thunder client final one
       await userLogin.find({email:req.params.userEmail})
        .then((data)=> {
            res.json(data);
        })
        .catch((error) => {
            console.error("error fetching data",error)
            res.status(500).json({error:"Internal server error"});
        })
    })
module.exports = router; 
