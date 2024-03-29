const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController.js')
const {authentication, isAdmin} = require('../middlewares/authentication.js')

router.post('/create', UserController.create)
router.post('/login', UserController.login)
router.get('/getUser/:email', authentication, UserController.getUser)
router.delete('/logout', authentication, UserController.logout)
router.get('/confirm/:emailToken', UserController.confirm)


module.exports = router