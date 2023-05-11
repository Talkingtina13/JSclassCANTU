const FORM = document.getElementById("form-input")
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')

const trackingObj = {
    MY_MPG: [],
    MY_TRIP_COST: [],
    updateDOM: function(input, id) {
        const divEl = document.querySelector(id)
        const p = document.createElement('p')
        p.textContent = input
        divEl.appendChild(p)
    },
    trackMPGandCost: function(miles, gallons, price) {
        const MPG = Math.round(miles/gallons)
        const tripCost = Math.round(gallons * price)
        updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, '#output')
        MY_MPG.push(MPG)
        MY_TRIP_COST.push(tripCost)
    },
    calculateSUM: function(arr) {
        let sum = 0
        for (value of arr) {
            sum += value
        }
        return sum
    },
    calculateAvg: function() {
        let sumMPG = calculateSUM(MY_MPG)
        let sumTripCost = calculateSUM(MY_TRIP_COST)
        let avgMPG = Math.round(sumMPG/MY_MPG.length)
        let avgTripCost = Math.round(sumTripCost/MY_TRIP_COST.length)
        updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
        updateDOM(`Average trip cost is ${avgTripCost}`, '#output-avg') 
    }
}
FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    let errMsg = []
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    if(miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure you input value greater than 0')
    } 
    if (price > 1000) {
        errMsg.push('Really? I think this is an error...try again')
    }
    if(errMsg.length > 0) {
        ERR.textContent = errMsg
    } 
    else {
        ERR.textContent = ''
        AVG_OUTPUT.textContent = ''
        trackMPGandCost(miles, gallons, price)
        calculateAvg()
    }
    FORM.reset()
})