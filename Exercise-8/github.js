const fetch = require('node-fetch')

fetch('https://api.github.com/users/albarracin-jorge').then((result)=>{
  return result.json()
}).then((json)=>{
  console.log(json);
})