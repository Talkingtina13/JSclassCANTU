// update the dom

const myArr = []

 const updateDom = (input) => {
  const divEl = document.querySelector(`#output`)
  const p = document.createElement('p')
  p.textContent = input
  divEl.appendChild(p)

}


const trackMPGCost = (miles, gallons, price = 3.79) => {
  const MPG = Math.round (miles / gallons * price)
  const tripCost = gallons * price
  updateDom(`Milage per gallon ${MPG} cost ${tripCost}`)
  myArr.push(MPG,tripCost)
};




trackMPGCost(250, 10, 4.10)
trackMPGCost(250, 10, 4)
updateDom(myArr)
