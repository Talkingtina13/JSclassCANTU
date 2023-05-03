const FORM = document.getElementById('form-input')

const MY_MPG=[]
const MY_TRIP_COST= []


const updateDom = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)

}

const trackMPGandCost = (miles, gallons, price = 3.79) => {
   const MPG = Math.round (miles / gallons * price)
    const tripCost = Math.round (gallons * price)
    updateDom(`Milage per gallon ${MPG} cost ${tripCost}`)
   MY_MPG.push(MPG)
    MY_TRIP_COST.push(tripCost)
  }
 

  const calculateSUM = (arr) => {
    let sum=0
    for(value of arr){
        sum += value
    }
    return sum
  }


  const calculateAvg = ()=>{
    let sumMPG= calculateSUM(MY_MPG)
    let sumTripCost=calculateSUM(MY_TRIP_COST)
    let avgMPG=sumMPG/MY_MPG.length
    let avgTripCost=sumTripCost/MY_TRIP_COST.length
    updateDom (`avergae MPG is ${avgMPG}`)
    updateDom (`avergae TRIP is ${avgTripCost}`)
  }


  FORM.addEventListener('submit', (e) => {
    e.preventDefault()
  const miles = (e.target.miles.value)
  const gallons =(e.target.gallons.value)
  const price = (e.target.price.value)
  trackMPGandCost(miles, gallons, price)
})

 //trackMPGandCost(300, 10, 5.4)
  //trackMPGandCost(400, 6, 5)
  //trackMPGandCost(200, 5, 4)
 // trackMPGandCost(150, 9, 4)
 // trackMPGandCost(270, 4, 3)
  //trackMPGandCost(180, 4, 6)

 // calculateAvg()