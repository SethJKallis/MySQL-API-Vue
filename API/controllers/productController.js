let productModel = require('../models/productModel');

module.exports = {
    showProducts(req,res){
        productModel.getProducts((err, results) => {
            if(err){
                res.send(err);
            } else res.json(results)
        })
    },

    showProductById(req,res){
        productModel.getProductById(req.params.id ,(err, results) => {
            if(err){
                res.send(err);
            } else res.json(results);
        });
    },

    createProduct(req,res){
        const data = req.body;
        productModel.insertProduct(data, (err, results) => {
            if(err){
                res.send(err);
            } else res.json(results);
        });
    },

    updateProduct(req,res){
        const data = req.body;
        const id = req.params.id;
        productModel.updateProduct(data, id, (err,results) => {
            if(err){
                res.send(err);
            } else res.json(results);
        });
    },

    deleteProduct(req,res){
        const id = req.params.id;
        productModel.deleteProduct(id, (err,results) => {
            if(err) res,send(err);
            else res.json(results);
        });
    }
}