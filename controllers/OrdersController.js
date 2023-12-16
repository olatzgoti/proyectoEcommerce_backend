const { Product, User, Order, OrderProduct, Sequelize } = require('../models/index.js');
const {Op} = Sequelize;

function catchError(res, error) {
    // maneja el posible error en la petición a la DB
    console.error(error)
    res.status(500).send('Query error')
  }

const OrdersController = {
    create(req, res)
    {   
        const ord=req.body
        Order.create({...req.body, UserId: req.body.UserId}) 
        .then((order) => res.status(201).send({message: 'Pedido creado', order }))
        .catch((error)=>console.log(error))
    },

    async getOrders(req,res) {
        await Order.findAll({include: [{model: Product, through: 'OrderProduct'}]})
        .then((orders) => {
          res.status(200).send({message: 'Pedidos y productos', orders})
        .catch((error)=>console.log(error))
    }
}



module.exports = OrdersController;
