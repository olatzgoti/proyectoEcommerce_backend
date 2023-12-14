const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/OrdersController.js');



router.post('/newOrder', OrdersController.create);

router.get('/getAll', OrdersController.getOrders);


module.exports = router;