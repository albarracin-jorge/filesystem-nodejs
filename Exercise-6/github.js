const https = require('https')

let username = 'albarracin-jorge'

let USER_AGENT = {
  mozilla: "Mozilla/5.0 (Windows; U; Windows NT 6.1; rv:2.2) Gecko/20110201",
  chrome: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
  edge: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19582"
}

let options = {
  host: 'api.github.com',
  path: '/users'+ username,
  method: 'GET',
  headers: { 'user-agent': USER_AGENT.mozilla}
}

let request = https.request(options, (response)=>{
  let body = ''
  response.on('data', (out)=>{
    body += out
  })

  response.on('end', (out)=>{
    let json = JSON.parse(body);
    console.log(json);
  })
})

request.on('error', (e)=>{
  console.log(e);
})

request.end() 