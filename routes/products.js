const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductsController.js');
const {authentication} = require('../middlewares/authentication.js')


router.post('/newProduct', authentication, ProductController.create);

router.get('/getAll', ProductController.getAll);

router.get('/getById/id/:id', ProductController.getById);

router.get('/getbyname/name/:name', ProductController.getByName);

router.get('/getByPrice/:price', ProductController.getByPrice);

router.get('/getAll?order=-id', ProductController.getAll);

router.put('/update/id/:id', authentication, ProductController.update);

router.delete(('/delete/id/:id'), authentication, ProductController.delete);

router.get('/orderByPrice', ProductController.orderByPrice);

module.exports = router;