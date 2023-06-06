const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    login : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel