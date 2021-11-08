const express = require('express');
const app = express();

require('./routes/author.routes')(app);

app.listen(8000, ()=> console.log("Listening on Port 8000."));
