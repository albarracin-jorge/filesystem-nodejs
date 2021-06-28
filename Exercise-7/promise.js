let calculate = (num1, num2) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let suma = num1 + num2
      if(suma < 5){
        resolve(num1 + num2)
      }else{
        reject("Error al sumar")
      }
    }, 2000)
  })
}
module.exports = {
    calculate: calculate
  }