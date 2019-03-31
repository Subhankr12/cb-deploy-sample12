const express = require('express')

const PORT = process.env.PORT || 4444

const app = express()

app.get('/', (req, res) => {
   res.send('Hello! this is a sample')
})

app.get('/add', (req, res) => {
   res.send('Added a add get request')
})

app.listen(PORT, () => {
   console.log('started on ' + PORT)
})