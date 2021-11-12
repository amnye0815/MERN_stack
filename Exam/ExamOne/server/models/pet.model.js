const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({

    petName:{
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"],
        unique: true
    },

    petType:{
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be at least 3 characters"]
    },

    petDesc: {
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be at least 3 characters"]
    },

    // petSkills: {
    //     type: String,
    //     required: false
    // },
}, {timestamps: true});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;