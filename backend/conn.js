const mongoose = require("mongoose");
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
mongoose.connect("mongodb://localhost:27017/RentalSystem",options)
.then(()=>{
    console.log("connected to mongodb")
 
})
.catch((err) => {
    console.log("erron happen while connecting",err)
})
