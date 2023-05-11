const myArr = []

// //console.log(typeof myObj)
// console.log(typeof myArr)
// console.log(myArr === myObj)
const myNumber = 9 
const myObj = {
    name: 'Rio',
    age: 59,
    hobbies: ['coding', 'running', 'workout'],
    mobile: {
        make: 'pixel 7', 
        OS: 'android',
    },
    myGreeting: function(person) {
        return `${this.name} who loves to ${this.hobbies[0]} says What is UP ${person}`
    },
    increaseLikes: function() {
        this.likes += 1
    }
}
const rioObj = myObj
rioObj.increaseLikes()
console.log(rioObj)
rioObj.age = 60

const greeting = myObj.myGreeting('jane')
console.log(greeting)

console.log(myObj.name.length)

for(key in myObj) {
    console.log(`key ${key} and value ${myObj[key]} `)
}


// comment where you played around with these methods
function myNum(x) {
    Number.parseFloat(x)
}
console.log(myNum('abc'))

// topics primand obj <> looping over obj <> passed by value or reference

//car: {
  //  make: 'Toyota',
  //model: 'Prius',
  //  year: '2004',
//},
//pets: ['Forest', 'Karl','Champ'],

//myStatement: function(person, age) {
  //  if (age === 23) {
    //    console.log(`${person} is the same age as ${this.name}`)
    //} else if (age > 23) {
      //  console.log(`${person} is older than ${this.name}`)
    //} else {
      //  console.log(`${person} is younger than ${this.name}`)
    //}
//},

//}

//const myHi = myObj.myStatement('kim', 27)
//console.log(myHi)