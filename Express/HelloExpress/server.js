const express = require("express");
const app = express();
const port = 8000;

// req is short for request
// res is short for response
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api", (req, res) => {
  res.json("This is read through nodemon");
});

const server = app.listen(port, () =>
  console.log(`Listening on port: ${port}`)
);

app.post("/api/users", (req,res) => {
  console.log(req.body);
  users.push(req.body);
  res.json( { status: "ok" });
});

// we can create a function to return a random / fake "Product"
