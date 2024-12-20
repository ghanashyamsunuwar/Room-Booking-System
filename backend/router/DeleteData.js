const express = require("express");
const router = new express.Router();

const roomsApi = require("../models/Rooms")


// Define the API endpoint to delete a product by ID
router.delete('/DeleteData/:productId', async (req, res) => {
    try {
        const deletedProduct = await roomsApi.findByIdAndDelete(req.params.productId);
        if(!deletedProduct){
            return res.status(404).json({message: "Product not found"});
        }
        res.json({message: "Product deleted successfully"});

     } catch(error){
            res.status(500).json({message:"Internal server error"});
      }
  });


module.exports = router; 
