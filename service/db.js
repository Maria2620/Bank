//integration codes:

//import mongoose library
const mongoose = require("mongoose")

//connection
mongoose.connect('mongodb://127.0.0.1:27017/bankServer')

//connect collection:

//create a model for collection
const User = mongoose.model('User',{
    acno:Number,
    uname:String,
    psw:String,
    balance:Number,
    transaction:[]

})

//export model
module.exports = {
    User
}