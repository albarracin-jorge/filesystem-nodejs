const request = require('request');
const argv = require('yargs').argv;

let address = argv.address;
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=`;//Insert API Key here

request({
  url: url,
  json: true
},(error, response, body)=>{
  if(error){
    console.log("Servicio no disponible");
  }else if(body.status === "ZERO_RESULTS"){
    console.log("Ubicacion no encontrada")
  }else{
    // console.log(JSON.stringify(body, undefined, 1))
    console.log(JSON.stringify(`Direccion: ${body.results[0].formatted_address}`));
    console.log(JSON.stringify(`Latitud: ${body.results[0].geometry.location.lat}`));
    console.log(JSON.stringify(`Longitud: ${body.results[0].geometry.location.lng}`));
  }
});