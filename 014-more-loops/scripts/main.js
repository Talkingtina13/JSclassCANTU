const MY_MPG = []
const MY_TRIP_COST = []

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGandCost = (miles, gallons, price = 3.79) => {
    const MPG  = Math.round(miles/gallons)
    const tripCost = Math.round(gallons * price)
    updateDOM(`Miles per gallon  is ${MPG} and trip cost is ${tripCost}`)
    MY_MPG.push(MPG)
    MY_TRIP_COST.push(tripCost)
}

const calculateSUM = (arr) => {
    let sum = 0
    // for(let i=0; i < arr.length; i++) {
    //     sum = sum + arr[i]
    // }
    // arr.forEach(element => {
    //     sum += element
    // })
    for(value of arr) {
       sum += value
    }
    return sum
}

const calculateAvg = () => {
    let sumMPG = calculateSUM(MY_MPG)
    let sumTripCost = calculateSUM(MY_TRIP_COST)
    let avgMPG = Math.round(sumMPG/MY_MPG.length)
    let avgTripCost = Math.round(sumTripCost/MY_TRIP_COST.length)
    updateDOM(`Average MPG is ${avgMPG}`)
    updateDOM(`Average Trip is ${avgTripCost}`)
}
trackMPGandCost(200, 15, 3)
trackMPGandCost(180, 20, 6)
trackMPGandCost(420, 20, 4.5)
trackMPGandCost(530, 17, 2.83)
trackMPGandCost(121, 21, 5)
trackMPGandCost(390, 33, 7)
calculateAvg()