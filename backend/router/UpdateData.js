// routes/items.js
const express = require('express');
const router = express.Router();
const roomsApi = require("../models/Rooms")

// Update an item by ID
router.put('/UpdateData/:_id', async (req, res) => {
  const { _id } = req.params;
  const { name, image, price, parking, bathrooms, roomscounts } = req.body; // Assuming these are fields to update

  try {
    const updatedItem = await roomsApi.findByIdAndUpdate(
      _id,
      { name, image, price, parking, bathrooms, roomscounts },
      { new: true }
    );

    if (updatedItem) {
      res.json({ message: 'Data updated successfully', data: updatedItem });
      console.log(updatedItem);
    } else {
      res.status(404).json({ message: 'Data not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//     const { _id } = req.params;
//     const { name, image, price, parking, bathrooms, roomscounts } = req.body; // Assuming these are fields to update
   
//     try {
//       const updatedItem = await roomsApi.findByIdAndUpdate(
//         _id,
//         { name, image, price, parking, bathrooms, roomscounts },
//         { new: true }
//       );
//       res.json(updatedItem);
//       console.log(updatedItem);
//       console.log(name.req.body)
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
// });

module.exports = router;
