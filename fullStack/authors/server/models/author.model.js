const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({

    authorName:{
        type: String,
        require: [true, "Name is required"],
        minLength:[3, "Author name must be at least 3 characters"]
    }
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;