const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    name:{
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
    roomscounts:{
        type:Number,
        require:true
    },
    bathrooms:{
        type:String,
        require:true
    },
    parking:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    lat:{
        type:String,
        require:true
    },
    log:{
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
const roomsApi = new mongoose.model("roomsApi",roomSchema);
module.exports = roomsApi;