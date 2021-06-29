const fs = require('fs');
let first_chain = [];
let main_data = [];
let data_arr = [];
var data;

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
      console.log(main_data);//Show array (object)
      for(data in main_data){//Put object into array
        data_arr.push([data, main_data[data]])
      }
      data_arr.sort((a, b)=>{//sort array
        return a[1] - b[1];
      });
      console.log(data_arr);//show array sorted
    })
  }
}