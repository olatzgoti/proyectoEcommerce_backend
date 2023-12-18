const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/OrdersController.js');
//const {authentication, isAdmin} = require('../middlewares/authentication.js')


router.post('/neworder', OrdersController.create)
router.get('/getAll', OrdersController.getOrders)

module.exports = router;