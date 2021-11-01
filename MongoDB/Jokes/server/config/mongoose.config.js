const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to DB"))
    .catch(err => console.log("Something went wrong. Connection not made.", err));