const scnd_file = require("./scnd_file.js");

console.log("Welcome!");

setTimeout(()=>scnd_file.createFile(), 1000);

setTimeout(()=>scnd_file.readFile(), 3000);