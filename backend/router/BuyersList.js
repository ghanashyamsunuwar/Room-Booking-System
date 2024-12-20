const express = require("express");
const router = new express.Router();

const userLogin = require("../models/userLogin");




router.post("/BuyersList", async (req,res) => {

//to get data on response server -> thunder client final one
       await userLogin.find()
        .then((data)=> {
            res.json(data);
        })
        .catch((error) => {
            console.error("error fetching data",error)
            res.status(500).json({error:"Internal server error"});
        })
    })

// Define the API endpoint to delete a product by ID
router.delete('/DeleteBuyers/:productId', async (req, res) => {
    try {
        const deletedProduct = await userLogin.findByIdAndDelete(req.params.productId);
        if(!deletedProduct){
            return res.status(404).json({message: "Product not found"});
        }
        res.json({message: "Product deleted successfully"});

     } catch(error){
            res.status(500).json({message:"Internal server error"});
      }
  });

module.exports = router; 
