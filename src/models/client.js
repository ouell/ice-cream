const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String
    },
    addressNumber: {
        type: String
    },
    addressCity: {
        type: String
    },
    addressPostalCode: {
        type: Number
    },
    birthDate: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Client', ClientSchema)
