const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstname:{
        type:String
    },
    middlename:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    contactno:{
        type:Number
    },
    address:{
        type:String
    },
    feedback:{
        type:String
    },
    gender:{
        type:String
    },
    selectState:{
        type:String
    },
    selectDistrict:{
        type:String
    },
    selectPoliceStation:{
        type:String
    },
    rate:{
        type:Number
    }
})

const User=mongoose.model('User',userSchema)

module.exports=User