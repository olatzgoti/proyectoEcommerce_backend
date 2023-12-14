const {User} = require ('../models/index')
const bcrypt = require('bcryptjs')

const UserController = {
  create(req, res) {
    req.body.Role = 'user'
    const password = bcrypt.hashSync(req.body.Password, 10)

    User.create({...req.body, password: password})
      .then(user => res.status(201).send({message: 'User created', user}))
      .catch(error => console.error(error))
  }

  // crear función para el login
}