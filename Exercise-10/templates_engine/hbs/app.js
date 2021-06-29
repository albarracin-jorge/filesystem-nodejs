const express = require('express')
const app = express()
const port = 3000

let persons = [
  {
    id: 1,
    _name: "Jorge"
  },
  {
    id: 2,
    _name: "Ignacio"
  },
  {
    id: 3,
    _name: "Diego"
  }
]

app.set('view engine', 'hbs')//define template

app.get('/', (req, res)=>{
  res.render('template', {title: 'Handlebars', message: 'Hola mundo! | Handlebars', persons: persons})
})

app.listen(port, ()=> console.log(`Running into port ${port}`))