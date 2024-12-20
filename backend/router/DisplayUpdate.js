const express = require("express");
const router = new express.Router();

const roomsApi = require("../models/Rooms")

const userEmail = require("./createSeller")

router.post("/DisplayUpdate/:_id", async (req,res) => {
    
    // console.log(userEmail)
    const updateProduct = await roomsApi.findById(req.params._id)
        .then((data)=> {
            res.json(data);
        })
        .catch((error) => {
            console.error("error fetching data",error)
            res.status(500).json({erro:"Internal server error"});
        })
    })
module.exports = router; 
