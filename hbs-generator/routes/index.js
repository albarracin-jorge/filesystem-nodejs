var express = require('express');
var router = express.Router();

/* GET home page. */
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

router.get('/', (req, res)=>{
  res.render('index', {title: 'Handlebars', message: 'Hola mundo! | Handlebars', persons: persons})
})

module.exports = router;
