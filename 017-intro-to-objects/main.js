const myObj = {}
const myArr = []

//console.log(typeof myObj)
//console.log(typeof myArr)
//console.log(myArr === myObj)
const myNumber = 9
const myObj ={
    name: 'Tina',
    age: 23,
    hobbies: ['art', 'kickboxing'],
    mobile: {
        make: 'iPhone 13',
        OS: 'IOS 16'
    }
    myGreeting: function(person) {
        return `What is UP ${person}`
    },
}

const greeting = myObj.myGreeting('jane')
console.log(greeting)
