// Imports
const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')


//set templating engine
app.set('view engine', 'ejs')

//navigation
app.get('', (req, res)=> {
    res.render('index')
})

app.get('/register', (req, res)=> {
    res.render('register')
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))

