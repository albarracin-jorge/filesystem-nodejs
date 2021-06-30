var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
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
  res.render('index', {title: 'pug', message: 'Hola mundo! | Pug', persons: persons})
})
module.exports = router;
