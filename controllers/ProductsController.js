const { Category, Product, Sequelize} = require('../models/index.js');

const {Op} = Sequelize;



const ProductController = {
    create(req, res) {
      console.log(req.body);
      const name = req.body.name;
      const price = req.body.price;
      const category = req.body.CategoryId;
    
      if(!name || !price || !category) 
      { 
        res.send('Rellene todos los campos');
    }
      else
      {
      Product.create(req.body)
      .then(product => res.status(201).send({message: 'Product created', product}))
      .catch((error) => console.error(error))
}},
    
    async update(req, res) {
      await Product.update(req.body,        
      {where: {id: req.params.id}})
        .then(res.status(200).send({message: 'Product updated'}))
        .catch((error) => console.error(error))
    },
  

    async delete(req, res) {
      await Product.destroy({where: {id: req.params.id}})
      .then(res.status(200).send({message: 'Product deleted'}))
      .catch((error) => console.error(error))
    },
  

    async getAll(req, res) {
      await Product.findAll({include: [Category]})
      .then(products => res.status(200).send({message: 'Products:', products
    }))
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
    },

    async getByPrice(req,res){

      await Product.findAll({
        where: {price: {[Op.like]: req.params.price}}
      })
      .then(product=>res.status(200).send({product}))
      .catch((error)=>console.log(error))
    },

    async orderByPrice(req, res){
      
        await Product.findAll({ order: [['price', 'DESC']]})
        .then(products => res.status(200).send({message: 'Products:', products
      }))
        .catch((error) => console.error(error))
      }     
    }
  
  
  module.exports = ProductController;