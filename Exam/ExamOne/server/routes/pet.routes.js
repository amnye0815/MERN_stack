const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.get('/api/pets', PetController.findAllPets);
    app.post('/api/pets', PetController.createPet);
    app.get('/api/pets/:id', PetController.findOnePet);
    app.put('/api/pets/:id', PetController.editPet);
    app.delete('/api/pets/:id', PetController.deletePet);
}