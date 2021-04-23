/*
 * @file: db-schema.js
 * @description: It contains db schema for Broker firm.
 * @author: Vinit Sahasrabudhe
 */

import mongoose from 'mongoose';
const brokerfirms = new mongoose.Schema(
    {
        _id:String,
        language: {
            type: String,
            ref: 'language'
        },
        firmName: {
            type: Object,
            required: true
        },
        firmEmail: {
            type: String,
            required: true
        },

        status: {
            type: Number,
            required: true
        },
        contactPhone: {
            type: String,
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
        sac:{
            type : Array
        },
        zipcode: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        fullName: {
            type: Object,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        createdAt: {
            type: Number
        },
        updatedAt: {
            type: Number
        },
		permission : {
			type : Array
		}
    },
    {
        versionKey: false,
        // Make Mongoose use Unix time (seconds since Jan 1, 1970)
        timestamps: { currentTime: () => Date.now() }
    }
);
module.exports = mongoose.model('brokerfirms', brokerfirms)
// export default BrokerFirmSchema;