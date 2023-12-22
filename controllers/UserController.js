const {User, Token, Sequelize} = require ('../models/index')
const {Op} = Sequelize
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {jwt_secret} = require('../config/config.json')['development']
const transporter = require('../config/nodemailer')

async function matchFunction(user, req, res){
  let isMatch = false
  if (user){
    isMatch = await bcrypt.compareSync(req.body.password, user.password)
  }
  if(!user || !isMatch) {
    return res.status(400).send('Incorrect user/password')
  }
  const token = await jwt.sign({id: user.id}, jwt_secret)
  await Token.create({token, UserId: user.id})
  return res.send({message: 'Hola ' + user.name, user, token})

}

const UserController = {
  async create(req, res, next) {
    let check
    try {
        check = await User.findOne({
          where: {
            email: req.body.email
          }
        })

      if(check != null || check != undefined){
        const error = {status: 500, message: 'email already used'}
        throw error
        // res.send({message: 'email already used'})
        return
      }
      req.body.role = 'user'
      // controla posible error de falta de password
      if(req.body.password){
        const password = bcrypt.hashSync(req.body.password, 10)
        const user = await User.create({...req.body, password, confirmed: false})
        // creamos token para ocultar el email en la url de confirmación
        const emailToken = jwt.sign({email: req.body.email}, jwt_secret, {expiresIn: '48h'})
        const url = 'http://localhost:3000/users/confirm/' + emailToken

        await transporter.sendMail({
          to: req.body.email,
          subject: 'Confirma tu registro',
          html: `<h3>Pulsa en el enlace para confirmar tu registro </h3>
                <a href = '${url}'>Registro</a>`
        })
        .then(res.status(201).send({message: 'Te hemos enviado un email para confirmar tu registro', user}))
        .catch(error => console.log(error))
      } else {
        const error = {status: 500, message: 'Password is required'}
        throw (error)
      }
      
    } catch (error) {
      next(error)
    }
  },

  async confirm(req, res) {
    try {
      const token = req.params.emailToken
      const payload = jwt.verify(token, jwt_secret)
      await User.update({confirmed: true}, {
        where: {
          email: payload.email
        }
      })
      res.status(200).send({message: 'Usuario confirmado correctamente'})
    } catch (error) {
      console.log(error)
    }
  },

  async login(req, res) {
    await User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then((user) => {
      Token.findOne({
        where: {
          UserId: user.id
        }
      }).then(
        (tokenData) => {
          if(!user.confirmed){
            return res.status(400).send({message: 'Please confirm your email'})
          }
          if (tokenData != null) {
            res.status(400).send({message: 'User already logged'})
          } else {
            matchFunction(user, req, res)
          }
        } 
      )
    })
    .catch((error) => {
      console.error(error)
      res.status(500).send({message: 'Data error'})
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
    .then(users => {
      if(users){
        res.status(200).send({message: 'Users:', users})
      } else {
        res.status(500).send({message: 'Incorrect email'})
      }
    })
    .catch(error => console.log(error))
  }
}

module.exports = UserController