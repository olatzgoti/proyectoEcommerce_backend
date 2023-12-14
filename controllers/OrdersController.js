const { Product, User, Order, Sequelize } = require('../models/index.js');
const {Op} = Sequelize;

function catchError(res, error) {
    // maneja el posible error en la petición a la DB
    console.error(error)
    res.status(500).send('Query error')
  }

const OrdersController = {

    create(req, res)
    {   console.log(req.body);
        Order.create(req.body)
        .then(order => res.status(201).send({message: 'Pedido creado', order}, console.log(order)))
        .catch((error)=>console.log(error))
    },

    async getOrders(req,res) {

        await Order.findAll({ include: [Product] })
        .then(order=>res.status(200).send({message: 'Pedidos y productos', order}))
        .catch((error)=>console.log(error))
    }
}

module.exports = OrdersController;