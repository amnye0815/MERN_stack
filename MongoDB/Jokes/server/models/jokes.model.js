cfonst mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
    __v: Number
},
    { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;