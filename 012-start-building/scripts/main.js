// update the dom

const myArr = []

 const updateDom = (input) => {
  const divEl = document.querySelector(`#output`)
  const p = document.createElement('p')
  p.textContent = input
  divEl.appendChild(p)

}


const milage = (miles, gallons, price = 3.79) => {
  const MPG = miles/gallons 
  const tripCost = MPG * price
  myArr.push[MPG, tripCost]
}
 



updateDom(milage(300,10,5.40))
