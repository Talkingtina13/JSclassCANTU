// Practicing Functions 

function doMath (a,b) {
  let result = a+b
  return result
   // console.log(`this is the result ${a - b}`)
   // console.log(`this is the result ${a + b}`)
   // console.log(`this is the result ${a / b}`)
   // console.log(`this is the result ${a * b}`)
}


doMoreMath = (a,b) => a * b 
divide = (a,b) => a / b
max = (a,b) => a - b
  

console.log(doMoreMath(75 ,30))

console.log(divide(650,65))

console.log(subtract(15,8))

const result = doMath(10, 4)
console.log(`this result was returned from the function  ${result}`)