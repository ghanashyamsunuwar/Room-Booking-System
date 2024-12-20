const express = require("express");
const router = new express.Router();

const bookedApi = require("../models/Booked");




router.post("/Bookeds", async (req,res) => {

//to get data on response server -> thunder client final one
       await bookedApi.find()
        .then((data)=> {
            res.json(data);
        })
        .catch((error) => {
            console.error("error fetching data",error)
            res.status(500).json({error:"Internal server error"});
        })
    })
module.exports = router; 
