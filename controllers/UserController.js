const {User, Token, Sequelize} = require ('../models/index')
const {Op} = Sequelize
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {jwt_secret} = require('../config/config.json')['development']

const UserController = {
  create(req, res) {
    if(!req.body.name || !req.body.last_name || !req.body.email || !req.body.password) {
      return res.status(400).send({message: 'All fields are required'})
    }

    req.body.role = 'user'
    const password = bcrypt.hashSync(req.body.password, 10)
    User.create({...req.body, password: password})
      .then(user => res.status(201).send({message: 'User created', user}))
      .catch(error => console.error(error))
  },

  async login(req, res) {
    await User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      const isMatch = bcrypt.compareSync(req.body.password, user.password)
      if(!user || !isMatch) {
        return res.status(400).send('Incorrect user/password')
      }
      const token = jwt.sign({id: user.id}, jwt_secret)
      Token.create({token, UserId: user.id})
      res.send({message: 'Hola ' + user.name, user, token})
    })
  },

  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            {UserId: req.user.id},
            {token: req.headers.authorization}
          ]
        }
      })
      res.status(200).send({message: 'Logout'})
    } catch {
      error => res.status(400).send({message: 'Logout error'})
    }
  },

  // sólo podrán ver los datos de un usuario conectado si se tiene permisos de administrador (se usa el middleware isAdmin)
  async getUser(req, res) {
    await User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then(users => res.status(200).send({message: 'Users:', users}))
    .catch(error => console.log(error))
  }
}

module.exports = UserController