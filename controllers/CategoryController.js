const {Category, Sequelize} = require('../models/index.js')
const {Op} = Sequelize

const CategoryController = {
  create(req, res) {
    Category.create(req.body)
    .then(category => res.status(201).send({message: 'Category created', category}))
    .catch((error) => console.error(error))
  },

  async update(req, res) {
    await Category.update(
      {name: req.body.name}, {where: {id: req.params.id}})
      .then(res.status(200).send({message: 'Category updated'}))
      .catch((error) => console.error(error))
  },

  async delete(req, res) {
    await Category.destroy({where: {id: req.params.id}})
    .then(res.status(200).send({message: 'Category deleted'}))
    .catch((error) => console.error(error))
  },

  async getAll(req, res) {
    await Category.findAll()
    .then(categories => res.status(200).send({message: 'Categories:', categories}))
    .catch((error) => console.error(error))
  },

  async getById(req, res) {
    await Category.findByPk(req.params.id)
    .then(category => res.status(200).send({category}))
    .catch((error) => console.error(error))
  },
  async getByName(req, res) {
    await Category.findOne({
      where: {name: {[Op.like]: req.params.name}}
    })
    .then(category => res.status(200).send({category}))
    .catch((error) => console.error(error))
  }
  
}

module.exports = CategoryController