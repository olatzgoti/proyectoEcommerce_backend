const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductsController.js');


router.post('/newProduct', ProductController.create);

router.get('/getAll', ProductController.getAll);

//router.get('/getAll?order=price', ProductController.getAll);
///personas?order=-ci

router.get('orderByPrice', ProductController.orderByPrice);

router.get('/getById/id/:id', ProductController.getById);

router.get('/getbyname/name/:name', ProductController.getByName);

router.get('/getByPrice/:price', ProductController.getByPrice);

router.get('/getAll?order=-id', ProductController.getAll);

router.put('/update/id/:id', ProductController.update);

router.delete(('/delete/id/:id'), ProductController.delete);


module.exports = router;