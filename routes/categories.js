const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/CategoryController.js')

router.post('/newCategory', CategoryController.create)

router.put('/updateCategory/id/:id', CategoryController.update)

router.delete('/deleteCategory/id/:id', CategoryController.delete)

router.get('/getAll', CategoryController.getAll)

router.get('/getById/id/:id', CategoryController.getById)

router.get('/getByName/name/:name', CategoryController.getByName)

module.exports = router