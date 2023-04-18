// update the dom

const myArr = []

 const updateDom = (input) => {
  const divEl = document.querySelector(`#output`)
  const p = document.createElement('p')
  p.textContent = input
  divEl.appendChild(p)

}


const trackMPGCost = (miles, gallons, price = 3.79, precision = 2) => {
  const MPG = (miles / gallons * price).toFixed(precision)
  const tripCoast = gallons * price
  myArr.push(MPG,tripCoast)
}



updateDom(trackMPGCost(250, 10, 4.10))
  updateDom(trackMPGCost(250, 10, 4))
