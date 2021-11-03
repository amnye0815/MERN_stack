const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config')
require('./routes/product.routes')(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(8000, () => console.log('Listening on Port 8000.'));