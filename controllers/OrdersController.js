const { Product, Order } = require('../models/index.js');

const OrdersController = {
    create(req, res)
    {   
        Order.create({...req.body, UserId: req.user.id})
        .then((order) => {
          res.status(201).send({message: 'Pedido creado', order})
          order.addProduct(req.body.ProductId)
        })
        .catch((error)=>{res.status(500).send({message: 'Error'})})
    },

    async getOrders(req,res) {
        await Order.findAll({include: [{model: Product, through: 'OrderProduct'}]})
        .then((orders) => {
          res.status(200).send({message: 'Pedidos y productos', orders})

        })
        .catch((error) => console.error(error))
    }
}

module.exports = OrdersController;