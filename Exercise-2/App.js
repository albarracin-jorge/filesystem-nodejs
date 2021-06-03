const _ = require('lodash');
const argv = require('yargs').argv;

const a = [
  {name: "Jorge", lastname: "Albarracin", age: 24},
  {name: "Mercedes", lastname: "Albarracin", age: 22},
  {name: "Diego", lastname: "Mallol", age: 24}
]

if(argv.user === 'Admin'){
  let result = _.find(a, {lastname: "Mallol"})
  console.log(result)
}else{
  console.log('Invalid user');
}