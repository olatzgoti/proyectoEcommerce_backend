const express = require('express');
const app = express();
const {typeError} = require('./middlewares/errors.js')
const {authentication} = require('./middlewares/authentication.js')
const PORT = 3000;

app.use(express.json())

app.use('/categories', require('./routes/categories'))
app.use('/products', require('./routes/products'))
app.use('/orders', require('./routes/orders'))
app.use('/users', require('./routes/users'))

app.use(typeError)

app.listen(PORT, () => console.log('Server started at port ' + PORT))

module.exports = app