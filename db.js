// let mongoose = require("mongoose");
import mongoose from 'mongoose'
// Local db url
mongoose.connect('mongodb://localhost:27017/Healthiex', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

let db = mongoose.connection;

// CONNECTION EVENTS

// When successfully scheduleconnected
db.on("connected", function () {
    console.log("Mongoose default connection open");
});

// When the connection is disconnected
db.on("disconnected", function () {
    console.log("Mongoose default connection disconnected");
});

// If the connection throws an error
db.on("error", function (err) {
    console.log("Mongoose default connection error: " + err);
});