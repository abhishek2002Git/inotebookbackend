const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();


const app = express()
const port = 5000


app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
// on 'localhost:3000/api/auth' 'auth.js' will be served
app.use('/api/notes', require('./routes/notes'))

// app.listen(port, () => {
app.listen(process.env.PORT || 5000, () => {
  console.log(`iNoteBook BackEnd listening at http://localhost:${port}`)
})
