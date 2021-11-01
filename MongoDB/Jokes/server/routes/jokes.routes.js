const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:_id', JokeController.findThisJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.put('/api/jokes/:_id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/:_id', JokeController.deleteThisJoke);
}