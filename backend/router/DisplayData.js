const express = require("express");
const router = new express.Router();

const roomsApi = require("../models/Rooms");
const userLog = require("../models/userLogin");



router.post("/DisplayData", async (req,res) => {
    // try{
    //     await RoomsApi.create({
    //         name:req.body.name,
    //         email:req.body.email,
    //         bedrooms: req.body.bedrooms,
    //         bathrooms: req.body.bathrooms,
    //         parking: req.body.bathrooms,
    //         address:req.body.address
    //     }).then(res.json({success:true}))
    // }catch(err) {
    //     console.log(err)
    // }

    //--to enter data in database
//     try {
//         // await userLog.create({   

//         const roomDet = new roomsApi({
//                     name:req.body.name,
//                     email:req.body.email,
//                     roomscount: req.body.bedrooms,
//                     bathrooms: req.body.bathrooms,
//                     parking: req.body.bathrooms,
//                     address:req.body.address
//         });
//         const roomsData = await roomDet.save();
//         // res.status(201).send(userLogin);
//         res.json({success:true});
//     } catch (err) {
//         // res.status(400).send(err);
//         // res.json({success:false});
//         console.log(err);
//     }

//    // defining module 
//    const roomsapis = mongoose.model('roomsapis', new mongoose.Schema({
//     // Define the schema fields here
//     name: String,
//     email:String,
//     roomscount: Number,
//     bathrooms:Number,
//     parking:String,
//     address: String

//   }));
// });

// //to get data of database main method
// router.post("/DisplayData", (req,res) => {
//     roomsapis.find()
//    .then((data) => {
//     console.log(data);
//     res.json(data);
//    })
//    .catch((error) => {
//     console.log("fetching error data",error)
//     res.status(500).json({error:"internet server error"})
//    })
// })
// })
// //  youtube method
//     //to get data of database
//         try{
//             console.log(global.roomsapis)
//             res.send([global.roomsapis])
//         }catch (error){
//             console.error(error.message)
//             res.send("server error")
//         }
//     })

// //to get data of user 
//     await userLog.find()
//     .then((datas)=> {
//         res.json(datas);
//     })
//     .catch((error) => {
//         console.error("error fetching data", error)
//         res.status(500).json({error:"Internal server error"});
//     })
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
