const mongoose = require('mongoose');

const { Schema } = mongoose;

const GroupsSchema = new Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  group_details: String,
  bussiness_name:String,
  email: String,
  address_one: String,
  address_two:String,
  country:String,
  state:String,
  city:String,
  zipcode:String,
  phone:String,
  primary_contact:String,
  email:String,
  password:String,
  employee_details:String,
  bank_details:String,
  account_name:String,
  account_number:String
});
let Groups=module.exports=mongoose.model('Groups', GroupsSchema);