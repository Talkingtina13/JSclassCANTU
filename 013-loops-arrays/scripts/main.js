// update the dom

const myMPG = []
const myTripCost = []

 const updateDom = (input) => {
  const divEl = document.querySelector(`#output`)
  const p = document.createElement('p')
  p.textContent = input
  divEl.appendChild(p)

}


const trackMPGCost = (miles, gallons, price = 3.79) => {
  const MPG = Math.round (miles / gallons * price)
  const tripCost = Math.round (gallons * price)
  updateDom(`Milage per gallon ${MPG} cost ${tripCost}`)
  myMPG.push(MPG)
  myTripCost.push(tripCost)
};

const calculateMPGAvg = () => {
  //const avgMPG = (myArr[0]+ myArr[2]) / 2
 // updateDom(` Average miles per gallon is ${avgMPG} `)
 let totalMPG = 0
  for (let i = 0; i < myMPG.length; i++){
     totalMPG = totalMPG + myMPG[i]
  }
  
  let avgMPG = totalMPG/myMPG.length

  updateDom(`avg mps is ${avgMPG}`)
}

trackMPGCost(250, 10, 4.10)
trackMPGCost(400, 12, 5)
trackMPGCost(200, 12, 4)
trackMPGCost(150, 15, 4)
trackMPGCost(270, 4, 3)
trackMPGCost(180, 4, 6)

//updateDom(myArr)

calculateMPGAvg()