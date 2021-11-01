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

