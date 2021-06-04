const fs = require('fs');

module.exports = {
  createFile : ()=>{
    console.log("Creating text file...");
    fs.appendFile("./Exercise-1/text.txt", "Hello World! Hola Mundo! ", (error)=>{
      if(error){
        console.log(`An error was happend creating file! ${error}`)
      }
    });
    console.log("File create succesfully!");
  },
  readFile : ()=>{
    console.log("Reading text file...");
    fs.readFile("./Exercise-1/text.txt", 'utf-8', (error, data)=>{
      if(error){
        console.log(`An error was happend reading file! ${error}`)
      }
      console.log(data);
    })
  }
}