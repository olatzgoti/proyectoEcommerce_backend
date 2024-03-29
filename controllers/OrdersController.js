const { Product, User, Order } = require('../models/index.js');

const OrdersController = {
    async create(req, res)
    {   
      const checkUser = await User.findOne({
        where: {
          id: req.body.UserId
        }
      })
      
      const checkProduct = await Product.findOne({
        where: {
          id: req.body.ProductId
        }
      })
      
      if(checkUser && checkProduct){
        await Order.create({...req.body, UserId: req.body.UserId})
        .then((order) => {
          res.status(201).send({message: 'Pedido creado', order})
          order.addProduct(req.body.ProductId)
        })
        .catch((error)=>{res.status(500).send({message: 'Error:', error})})
      } else {
        res.status(500).send({message: 'Incorrect UserId/ProductId'})
      }
    },

    async getOrders(req,res) {
        await Order.findAll({include: [{model: Product, through: 'OrderProduct'}]})
        .then((orders) => {
          res.status(200).send({message: 'Pedidos y productos', orders})})
        .catch((error)=>console.log(error))
    },

    async getOrdersById(req,res) {
      await Order.findAll(
        {where: {UserId: req.params.id},
        include: [{model: Product, through: 'OrderProduct'}]}
      )
      .then((orders) => {
        res.status(200).send({message: 'Pedidos y productos', orders})})
      .catch((error)=>console.log(error))
  }
}



module.exports = OrdersController;
