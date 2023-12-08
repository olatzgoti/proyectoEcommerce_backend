const { Product, Sequelize} = require('../models/index.js');

const {Op} = Sequelize;



const ProductController = {
    create(req, res) {
      Product.create(req.body)
      .then(product => res.status(201).send({message: 'Product created', product}))
      .catch((error) => console.error(error))
    },
  
    async update(req, res) {//SOLO DE NOMBRE LO 1º
      await Product.update(
        {name: req.body.name}, {where: {id: req.params.id}})
        .then(res.status(200).send({message: 'Product updated'}))
        .catch((error) => console.error(error))
    },
  

    async delete(req, res) {
      await Product.destroy({where: {id: req.params.id}})
      .then(res.status(200).send({message: 'Product deleted'}))
      .catch((error) => console.error(error))
    },
  
    async getAll(req, res) {
      await Product.findAll()
      .then(products => res.status(200).send({message: 'Products:', products}))
      .catch((error) => console.error(error))
    },
  
    async getById(req, res) {
      await Product.findByPk(req.params.id)
      .then(product => res.status(200).send({product}))
      .catch((error) => console.error(error))
    },
    
    async getByName(req, res) {
      await Product.findOne({
        where: {name: {[Op.like]: req.params.name}}
      })
      .then(product => res.status(200).send({product}))
      .catch((error) => console.error(error))
    }
    
  }
  
  module.exports = ProductController;