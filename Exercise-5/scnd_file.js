const fs = require('fs');
let first_chain = [];
let main_data;
let data_arr = [];

module.exports = {
  create: async ()=>{
    //creating array whit random numbers
    for(let i=0; i<100; i++){
      let num = `"${i}": ${Math.floor(Math.random() * (200 - 0)) + 0}`;
      first_chain[i] = num;
    }    
  },
  save: async ()=>{
    fs.appendFile('./data.json', `{${first_chain}}`, (err)=>{
      if(err) throw err
        console.log("Creación exitosa!")
    })
  },
  read: async ()=>{
    fs.readFile('./data.json', 'utf-8', (err, data)=>{
      if(err) throw err;
      main_data = JSON.parse(data)
      return main_data;
    })
  },
  sort: ()=>{
    
    for(var data in main_data){
      data_arr.push([data, main_data[data]])
    }
    data_arr.sort((a, b)=>{
      return a[1] - b[1];
    });
    console.log(data_arr);
  }
}