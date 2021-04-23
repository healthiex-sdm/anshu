var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
var Users = require('../../models/user');
import groupDetails from '../../schema/addgroup/group'
const addgroups = async function (req, res) {
    try{
        const { body: { user } } = req;
        //console.log(user);
        const finalUser = new groupDetails(user);

        finalUser.setPassword(user.password);
    
        return finalUser.save()
            .then(() => res.json({ user: finalUser.toAuthJSON() }));
    }catch(e){
        console.log(e);
      res.json({status:500,'message':e});
    }
}
module.exports.addgroups = addgroups;


