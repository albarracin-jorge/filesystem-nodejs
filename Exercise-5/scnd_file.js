const fs = require('fs');
let first_chain = [];
let main_data;

module.exports = {
  create: ()=>{
    //creating array whit random numbers
    for(let i=0; i<100; i++){
      let num = `"${i}": ${Math.floor(Math.random() * (200 - 0)) + 0}`;
      first_chain[i] = num;
    }    
  },
  save: ()=>{
    fs.appendFile('./data.json', `{${first_chain}}`, (err)=>{
      if(err) throw err
        console.log("Creación exitosa!")
    })
  },
  read: ()=>{
    fs.readFile('./data.json', 'utf-8', (err, data)=>{
      if(err) throw err;
      main_data = JSON.parse(data)
      console.log(main_data)

      for(i=0; i<1000; i++){
        if(main_data[i] > main_data[i+1]){
          let flag = main_data[i];
          main_data[i] = main_data[i+1];
          main_data[i+1] = flag;
        }
      }
      console.log("fila ordenada: ");
      console.log(main_data)
    })
  },
  order: ()=>{
    for(i=0; i<1000; i++){
      if(main_data[i]>main_data[i+1]){
        flag = main_data[i+1];
        main_data[i+1] = main_data[i];
        main_data[i] = flag;
      }
    }
  }
}