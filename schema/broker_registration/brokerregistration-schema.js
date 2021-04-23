// let mongoose = require('mongoose')
import mongoose from 'mongoose'

let schema = mongoose.Schema
let registeredUsers = new schema({
    // email:{type:String}
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
    address1: { type: String },
    address2: { type: String },
    phone: { type: Number },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    email: { type: String },
    password: { type: String },
    bankaccountName: { type: String },
    bankAccountNumber: { type: Number },
    zipcode: { type: Number },
    authCode: { type: String,required: true }

}, {
    timestamps: true
})
// export default registeredUsers
module.exports = mongoose.model('registeredUsers', registeredUsers)