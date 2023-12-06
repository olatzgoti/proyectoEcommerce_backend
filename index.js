const express = require('express')
const app = express()
const PORT = 3000

// app.use('users', require('./routes/users'))

app.listen(PORT, () => console.log('Server started at port ' + PORT))