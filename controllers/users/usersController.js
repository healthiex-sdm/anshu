var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
var Users = require('../../models/user');
var Groups = require('../../models/group');
var mailer= require('../../config/mailer');

const adduser = async function (req, res) {
    const { body: { user } } = req;
    if (!user.email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        });
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }
    const finalUser = new Users(user);

    finalUser.setPassword(user.password);

    return finalUser.save()
        .then(() => res.json({ user: finalUser.toAuthJSON() }));
}
module.exports.adduser = adduser;



const login = async function (req, res, next) {
    const { body: { user } } = req;
    if (!user.email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        });
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
        if (err) {
            return next(err);
        }

        if (passportUser) {
            const user = passportUser;
            Users.findById(user._id, function (err, data) {
                data.otp = Math.floor(Math.random() * 9999) + 1;
                data.save(function (err) {
                    if (err) {
                       return res.json({ 'status': 500, message: err });
                    }else{
                        console.log("data",data.email,"otp",data.otp);
                        mailer.otpSend(data.email,data.otp);
                    }
                });
            });
            user.token = passportUser.generateJWT();
            return res.json({ user: user.toAuthJSON() });
        }



        res.json({ 'status': 500, message: info });
    })(req, res, next);
}
module.exports.login = login;