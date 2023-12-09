const {Category, Product, Sequelize} = require('../models/index.js')
const {Op} = Sequelize

function catchError(res, error) {
  // maneja el posible error en la petición a la DB
  console.error(error)
  res.status(500).send('Query error')
}

const CategoryController = {
  create(req, res) {
    Category.create(req.body)
    .then(category => res.status(201).send({message: 'Category created', category}))
    .catch(error => {
      catchError(res, error)
    })
  },

  async update(req, res) {
    await Category.update(
      {name: req.body.name}, {where: {id: req.params.id}})
      .then(res.status(200).send({message: 'Category updated'}))
      .catch(error => {
        catchError(res, error)
      })
  },

  async delete(req, res) {
    await Category.destroy({where: {id: req.params.id}})
    .then(res.status(200).send({message: 'Category deleted'}))
    .catch(error => {
      catchError(res, error)
    })
  },

  async getAll(req, res) {
    await Category.findAll()
    .then(categories => res.status(200).send({message: 'Categories:', categories}))
    .catch(error => {
      catchError(res, error)
    })
  },

  async getById(req, res) {
    await Category.findByPk(req.params.id)
    .then(category => res.status(200).send({category}))
    .catch(error => {
      catchError(res, error)
    })
  },
  async getByName(req, res) {
    await Category.findOne({
      where: {name: {[Op.like]: req.params.name}}
    })
    .then(category => res.status(200).send({category}))
    .catch(error => {
      catchError(res, error)
    })
  },

  async getAllwithProducts(req, res) {
    await Category.findAll({include: [Product]})
    .then(categories => res.status(200).send(categories))
    .catch(error => {
      catchError(res, error)
    })
  }
  
}

module.exports = CategoryController