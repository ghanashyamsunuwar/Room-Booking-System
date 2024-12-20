const express = require("express");
const router = new express.Router();

const roomsApi = require("../models/Rooms");




router.post("/Roomss", async (req,res) => {

//to get data on response server -> thunder client final one
       await roomsApi.find()
        .then((data)=> {
            res.json(data);
        })
        .catch((error) => {
            console.error("error fetching data",error)
            res.status(500).json({error:"Internal server error"});
        })
    })
module.exports = router; 
