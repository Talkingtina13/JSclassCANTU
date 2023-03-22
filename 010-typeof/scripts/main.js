let taco = 7 // taco is now a number
console.log("taco is 7 which is typeof ", (typeof taco))

taco = "line" // taco is now a string
console.log("Taco is line which is typeof ", (typeof taco))

taco = true // taco is now a boolean
console.log("Taco  is true which is typeof ", (typeof taco))

taco = 42 // taco is a number
const result = taco + "1" // JavaScript coerces taco to a string, so it can be concatenated with the other operand
console.log("result of 7 + 1 is typeof - ", (typeof result)) // 71