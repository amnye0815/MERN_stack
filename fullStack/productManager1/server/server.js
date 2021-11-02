const express = require('express');
const cors = require('cors');
const app = express();

require('./routes/product.routes')(app);

app.use(cors());
app.listen(8000, () => console.log('Listening on Port 8000.'));