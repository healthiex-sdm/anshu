// let mongoose = require('mongoose')
import mongoose from 'mongoose'
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const schema = mongoose.Schema
const groupDetails = new schema({
    groupName: { type: String },
    groupEmail: { type: String },
    Addressline1: { type: String },
    Addressline2: { type: String },
    Country: { type: String },
    state: { type: String },
    city: { type: String },
    zipcode: { type: Number },
    GroupPhone: { type: Number },
    fullname: { type: String },
    email: { type: String },
    password: { type: String },
    phone: { type: String },
    TotalNoOfEmployees: { type: Number },
    Avgageemployee: { type: Number },
    accname: { type: String },
    accnumber: { type: Number },
    debitcardnumber: { type: Number }

}, {
    timestamps: true
})
// export default groupDetails

groupDetails.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password=crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  };
  
groupDetails.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
  };
  
  groupDetails.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
  
    return jwt.sign({
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
  }
  
  groupDetails.methods.toAuthJSON = function() {
    return {
      _id: this._id,
      email: this.email,
      token: this.generateJWT(),
    };
  };
module.exports = mongoose.model('groupDetails', groupDetails)