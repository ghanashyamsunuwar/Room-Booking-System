const express = require("express");
const router = new express.Router();

const roomsApi = require("../models/Rooms")

const multer = require('multer');
const path = require('path')

// // Set up the storage for uploaded images
let storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, file.originalname)
    // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})

let upload = multer({ 
    storage: storage
 })


// router.post("/AddData", upload.single('image'), async (req,res) => {
router.post("/AddData", upload.single('image'), async (req,res) => {


    //--to enter data in database
    try {
        // await userLog.create({   

        const roomDet = new roomsApi({
                    // image:req.body.image,
                    image:req.file.filename,
                    price:req.body.price,
                    name:req.body.name,
                    email:req.body.email,
                    roomscounts: req.body.roomscounts,
                    bathrooms: req.body.bathrooms,
                    parking: req.body.parking,
                    address:req.body.address,
                    lat:req.body.lat,
                    log:req.body.log
        });
        const roomsData = await roomDet.save();
        // res.status(201).send(userLogin);
        res.json({success:true});
    } catch (err) {
 
        console.log(err);
    }

});



module.exports = router; 
