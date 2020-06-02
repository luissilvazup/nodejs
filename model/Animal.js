const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    specie: {
        type: String,
        trim: true,
        required: 'Please, supply the specie name',
        lowercase: true
    },
    color: {
        type: String,
        trim: true,
        lowercase: true
    },
    weight: {
        type: Number,
        min: 1,
        max: 100
    }

});

module.exports = mongoose.model('Animal', animalSchema);