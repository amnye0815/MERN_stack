const express = require('express');
const cors = require('cors');
const app = express();

// Middleware has to be above our imports.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config')
require('./routes/product.routes')(app);


app.listen(8000, () => console.log('Listening on Port 8000.'));