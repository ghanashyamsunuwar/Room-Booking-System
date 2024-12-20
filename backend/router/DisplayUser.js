const express = require("express");
const router = new express.Router();

const userLog = require("../models/userLogin");



router.post("/DisplayUser", async (req,res) => {

//to get data of user 
    await userLog.find()
    .then((datas)=> {
        res.json(datas);
    })
    .catch((error) => {
        console.error("error fetching data", error)
        res.status(500).json({error:"Internal server error"});
    })

    })
module.exports = router; 
