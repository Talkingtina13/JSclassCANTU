// practice prob

const myMPG = []
const myTripCost = []

 const updateDom = (input) => {
  const divEl = document.querySelector(`#output`)
  const p = document.createElement('p')
  p.textContent = input
  divEl.appendChild(p)

}


const trackMPGandCost = (miles, gallons, price = 3.79) => {
  const MPG = Math.round (miles / gallons * price)
  const tripCost = Math.round (gallons * price)
  updateDom(`Milage per gallon ${MPG} cost ${tripCost}`)
  myMPG.push(MPG)
  myTripCost.push(tripCost)
};

const calculateMPGAvg = () => {
 let totalMPG = 0
  for (let i = 0; i < myMPG.length; i++){
     totalMPG = totalMPG + myMPG[i]
  }
  
  let avgMPG = Math.round(totalMPG/myMPG.length)
  updateDom(`avg mps is ${avgMPG}`)
}

const calculateAvgCoast = () => {
  let totalCoast = 0
  for (let i=0; i < myTripCost.length;i++){
      totalCoast = totalCoast + myTripCost[i]
  }
  let avgCoast = Math.round(totalCoast/myTripCost.length)
  updateDom(`avvg cost is ${avgCoast}`)

}

trackMPGandCost(200, 15, 3)
trackMPGandCost(180, 20, 6)
trackMPGandCost(420, 20, 4.5)
trackMPGandCost(530, 17, 2.83)
trackMPGandCost(121, 21, 5)
trackMPGandCost(390, 33, 7)

//updateDom(myArr)

calculateMPGAvg()