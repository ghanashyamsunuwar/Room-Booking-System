const express = require("express");
const router = new express.Router();

const roomsApi = require("../models/Rooms")

const userEmail = require("./createSeller")

router.post("/DisplayList/:userEmail", async (req,res) => {
    
// //to using sesion data
// const email = req.session.email;

//to get data on response server -> thunder client final one
    // console.log(userEmail)
       await roomsApi.find({email:req.params.userEmail})
        .then((data)=> {
            res.json(data);
        })
        .catch((error) => {
            console.error("error fetching data",error)
            res.status(500).json({erro:"Internal server error"});
        })
    })
module.exports = router; 
