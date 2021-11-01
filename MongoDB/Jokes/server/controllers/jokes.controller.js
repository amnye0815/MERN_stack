const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.findThisJoke = (req, res) => {
    Joke.findThis({ _id: req.params.id })
    .then(thisJoke => res.json({ joke: thisJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

modules.exports.updateExistingJoke = (req, res) => {
    Joke.findToUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

modules.exports.deleteThisJoke = (req, res) => {
    Joke.deleteThis({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}