const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    Buyername:{
        type:String,
        require:true,
    },
    price: {
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true
    },
    number:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },

    date:{
        type:Date,
        default:Date.now
    }

})
//creating a model i.e collection
const bookedApi = new mongoose.model("BookedApi",bookSchema);
module.exports = bookedApi;