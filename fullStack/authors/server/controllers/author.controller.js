
const Author = require('../models/author.model');

module.exports = {

    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor)=>{
                console.log(newAuthor);
                res.json(newAuthor);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    getOneAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then((thisAuthor)=>{
                console.log(thisAuthor);
                res.json(thisAuthor);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    getAllAuthors: (req, res) => {
        Author.find({}).collation({locale:'en',strength: 2}).sort({authorName:1})
            .then((allAuthors)=>{
                console.log(allAuthors);
                res.json(allAuthors);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then((deletedAuthor)=>{
                console.log(deletedAuthor);
                res.json(deletedAuthor);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    editAuthor: (req, res) => {
        Author.findByIdAndUpdate(
            { _id: req.params.id }, 
            req.body, 
            { new: true, runValidators: true })
            .then((updatedAuthor)=>{
                console.log(updatedAuthor);
                res.json(updatedAuthor);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },
}