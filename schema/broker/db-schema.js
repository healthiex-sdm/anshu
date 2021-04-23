/*
 * @file: db-schema.js
 * @description: It contains db schema for Broker firm.
 * @author: Vinit Sahasrabudhe
 */

import mongoose from 'mongoose';
const brokers = new mongoose.Schema(
    {
        _id: String,
        firstName: {
            type: Object,
            required: true
        },
        lastName: {
            type: Object,
            required: true
        },
        middleName: {
            type: Object,
            required: true
        },
        addressLine1: {
            type: Object,
            required: true
        },
        addressLine2: {
            type: Object,
        },
        country: {
            type: Object,
            required: true
        },
        city: {
            type: Object,
            required: true
        },
        state: {
            type: Object,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        isPasswordTemporary: {
            type: Boolean
        },
        bankAccountName: {
            type: String,
            required: true
        },
        bankAccountNumber: {
            type: String,
            required: true
        },
        permission: {
            type: Array
        },
        status: {
            type: Number,
            required: true
        },
        sac: {
            type: String,
            required: true
        },
        user_type: {
            type: String,
            ref: 'user_type'
        },
        createdAt: {
            type: Number
        },
        updatedAt: {
            type: Number
        }
    },
    {
        versionKey: false,
        // Make Mongoose use Unix time (seconds since Jan 1, 1970)
        timestamps: { currentTime: () => Date.now() }
    }
);
module.exports = mongoose.model('brokers', brokers)

// export default BrokerSchema;