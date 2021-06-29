var express = require('express')
var app = express()

//middleware
let isLogin = ()=> true

let logger = (request, response, next)=> {
  console.log("Request type:", request.method)
  next()
}

let showIP = (request, response, next)=> {
  console.log('IP: 127.0.0.1');
  next();
}

app.use((request, response, next)=>{
  if(isLogin()){
    next()
  }else{
    response.send("No estas registrado")
  }
}, logger, showIP)


//trying request by differents send methods
app.get('/', (request, response)=>{
  response.send(`Hello World! ${request.method}`)
})

app.post('/', (request, response)=>{
  response.send(`Hello World! ${request.method}`)
})

app.put('/', (request, response)=>{
  response.send(`Hello World! ${request.method}`)
})

app.delete('/', (request, response)=>{
  response.send(`Hello World! ${request.method}`)
})

app.listen(3000, ()=> console.log("Example app listening on port 3000!"))