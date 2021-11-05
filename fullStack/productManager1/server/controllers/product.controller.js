const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    const { title, price, desc } = req.body;
    Product.create({
        title, 
        price,
        desc
    })
        .then(product=> res.json(product))
        .catch(err=> res.json(err));
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts=> res.json(allProducts))
        .catch(err=> res.json(err));
}

module.exports.findThisProduct = (req, res) => {
    Product.findOne(req.params.id)
    .then(thisProduct => res.json(thisProduct))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.deleteThisProduct = (req, res) => {
    Product.deleteOne(req.params.id)
        .then(result => res.json(res))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}