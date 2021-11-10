const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.findThisProduct);
    app.put('/api/products/edit/:id', ProductController.updateExistingProduct);
    app.delete('/api/products/delete/:id', ProductController.deleteThisProduct);
}