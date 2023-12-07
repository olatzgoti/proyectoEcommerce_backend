const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.use('/categories', require('./routes/categories'))

app.listen(PORT, () => console.log('Server started at port ' + PORT))