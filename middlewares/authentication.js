const {User, Token, Sequelize} = require('../models')
const {Op} = Sequelize
const jwt = require('jsonwebtoken')
const {jwt_secret} = require('../config/config.json')['development']

const authentication = async(req, res, next) => {
  try {
    const token = req.headers.authorization
    const payload = jwt.verify(token, jwt_secret)
    const user = await User.findByPk(payload.id)
    const tokenFound = await Token.findOne({
      where: {
        [Op.and]: [
          {UserId: user.id},
          {token: token}
        ]
      }
    })

    if(!tokenFound){
      return res.status(401).send({message: 'Not authorized'})
    }

    req.user = user
    next()

  } catch (error) {
    console.log(error)
    res.status(500).send({message: 'Token error'})
  }
}

const isAdmin = async(req, res, next) => {
  const admin = 'admin'
  if(admin != req.user.role){
    return res.status(403).send({message: 'admin permission required'})
  }
  next()
}

module.exports = {authentication, isAdmin}