const express = require('express');
const productControl = require('../controllers/productController');

const router = express.Router();

router.get('/products', productControl.showProducts);
router.get('/products/:id', productControl.showProductById);

router.post('/products', productControl.createProduct);

router.put('/products/:id', productControl.updateProduct);

router.delete('/products/:id', productControl.deleteProduct);

module.exports = router;