const myArr = []

//console.log(typeof myObj)
//console.log(typeof myArr)
//console.log(myArr === myObj)
const myNumber = 13
const myObj = {
    name: 'Rio',
    age: 59,
    hobbies: ['coding', 'running', 'workout'],
    mobile: {
        make: 'pixel 7', 
        OS: 'android',
    },
    car: {
        make: 'Toyota',
        model: 'Prius',
        year: '2004',
    },
    pets: ['Forest', 'Karl','Champ'],

    myStatement: function(person, age) {
        if (age === 23) {
            console.log(`${person} is the same age as ${this.name}`)
        } else if (age > 23) {
            console.log(`${person} is older than ${this.name}`)
        } else {
            console.log(`${person} is younger than ${this.name}`)
        }
    },

}

const myHi = myObj.myStatement('kim', 27)
console.log(myHi)
