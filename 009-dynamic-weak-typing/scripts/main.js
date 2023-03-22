let moo = 13 // moo is now a number
console.log("moo is 13 - ", moo)
moo = "line" // moo is now a string
console.log("moo is line - ", moo)

moo = true // moo is now a boolean
console.log("moo is is true - ", moo)

moo = 13 // moo is a number
const result = moo + "1" // JavaScript coerces moo to a string, so it can be concatenated with the other operand
console.log("result is 13 + 1 ... ", result) // 131