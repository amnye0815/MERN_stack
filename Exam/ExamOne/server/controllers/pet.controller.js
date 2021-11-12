
const Pet = require('../models/pet.model');

module.exports = {

    createPet: (req, res) => {
        Pet.create(req.body)
            .then((newPet)=>{
                console.log(newPet);
                res.json(newPet);
            })
            .catch((err)=> {
                console.log(err);
                res.status(400).json(err);
            })
    },

    findOnePet: (req, res) => {
        Pet.findOne({ _id: req.params.id })
            .then((thisPet)=>{
                console.log(thisPet);
                res.json(thisPet);
            })
            .catch((err)=> {
                console.log(err);
                res.status(400).json(err);
            })
    },

    findAllPets: (req, res) =>{
        Pet.find({}).collation({locale: 'en', strength: 2}).sort({petType:1})
            .then((allPets)=>{
                console.log(allPets);
                res.json(allPets);
            })
            .catch((err)=> {
                console.log(err);
                res.status(400).json(err);
            })
    },

    deletePet: (req, res) =>{
        Pet.deleteOne({ _id: req.params.id })
            .then((deletedPet)=>{
                console.log(deletedPet);
                res.json(deletedPet);
            })
            .catch((err)=> {
                console.log(err);
                res.status(400).json(err);
            })
    },

    editPet: (req, res) => {
        Pet.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedPet)=>{
                console.log(updatedPet);
                res.json(updatedPet);
            })
            .catch((err)=> {
                console.log(err);
                res.status(400).json(err);
            })
    },
}