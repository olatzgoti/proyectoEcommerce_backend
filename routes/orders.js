const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/OrdersController.js');
const {authentication, isAdmin} = require('../middlewares/authentication.js')

router.post('/newOrder',authentication, OrdersController.create);
router.get('/getAll', OrdersController.getOrders);
// router.delete('/delete/:id', authentication, isAdmin, OrdersController.delete)

module.exports = router;