// Practicing Functions 

function sum(a, b) {
  return a + b
}

let sum2 =(a, b) => a + b

let isPositive =(number) =>
  number >= 0

let randomNumber = () => Math.random

console.log(sum2(75,30))
console.log(isPositive(-3,10))
console.log(randomNumber())