const mongoose = require("mongoose");
// const validator = require("validator");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        // unique:[true,"Email is already used"],
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error("Invalid Email");
        //     }
        // }
    },
    password:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    
    date:{
        type:Date,
        default:Date.now
    },
    number:{
        type: String,
        require:true
    }

})
//creating a model i.e collection
const userLog = new mongoose.model("userLog",userSchema);
module.exports = userLog;