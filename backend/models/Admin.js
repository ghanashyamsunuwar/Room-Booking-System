const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    },

})
//creating a model i.e collection
const adminLog = new mongoose.model("adminLog",userSchema);
module.exports = adminLog;