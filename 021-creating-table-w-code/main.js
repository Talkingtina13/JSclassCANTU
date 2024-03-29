const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')
const TBL_OUTPUT = document.getElementById('table-out')

const MY_DATA = []

function updateDOM (input, id) {
    const divEl = document.querySelector(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

function trackMPGandCost (miles, gallons, price) {
    const MPG = Math.round(miles/gallons)
    const tripCost = Math.round(gallons * price)
    updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, '#output')
    return {
        miles: miles,
        gallons: gallons,
        price: price,
        MPG: MPG,
        tripCost: tripCost,
    }
}

function calculateAvg() {  
    let sumMPG = 0
    let sumTripCost = 0
    MY_DATA.forEach(obj => {
        sumMPG += obj.MPG
        sumTripCost += obj.tripCost
    })
    let avgMPG = Math.round(sumMPG/MY_DATA.length)
    let avgTripCost = Math.round(sumTripCost/MY_DATA.length)
    updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
    updateDOM(`Average trip cost is ${avgTripCost}`, '#output-avg')
}

function isFormValid (miles, gallons, price) {
    const errMsg = []
    if(miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure you input value greater than 0')
    } 
    if (price > 1000) {
        errMsg.push('Really? I think this is an error...try again')
    }
    if(errMsg.length > 0) {
        ERR.textContent = errMsg
    
    } else {
        return true
    }
} 


function renderTableHeadings() {
    const tbl = document.createElement('table')
    const headings = ['Miles Drive:', 'Gallons Used:', 'Price Paid:', 'Trip MPG', 'Trip Cost', 'Edit/Delete']
    const tr = document.createElement('tr')
    headings.forEach(function(heading) {
        let th = document.createElement('th')
        th.textContent = heading
        tr.appendChild(th)
    })
    tbl.appendChild(tr)
    return tbl
} 
function renderEditDelBtn() {
    const td = document.createElement('td')
    const editBtn = document.createElement('button')
    editBtn.textContent = 'edit'
    const delBtn = document.createElement('button')
    delBtn.textContent = 'delete'
    td.appendChild(editBtn)
    td.appendChild(delBtn)
    return td

}   

function renderTable() {
    TBL_OUTPUT.innerHTML = ''
    const tbl = renderTableHeadings()
    TBL_OUTPUT.appendChild(tbl)
    MY_DATA.forEach(function(obj){
        const tr = document.createElement('tr')
        for (key in obj) {
            let td = document.createElement('td')
            td.textContent = obj[key]
            tr.appendChild(td)
        }

        const btnTD = renderEditDelBtn()
        // const editBtn = document.createElement('button')
        // editBtn.textContent = 'edit'
        // const delBtn = document.createElement('button')
        // delBtn.textContent = 'delete'
        // btnTD.appendChild(editBtn)
        // btnTD.appendChild(delBtn)
        tr.appendChild(btnTD)
        tbl.appendChild(tr)
    })
}

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    const isValid = isFormValid(miles, gallons, price)
    if(isValid) {       
        ERR.textContent = ''
        AVG_OUTPUT.textContent = ''
        const dataObj = trackMPGandCost(miles, gallons, price)
        MY_DATA.push(dataObj)
        renderTable()
        calculateAvg()
    }
    FORM.reset()
})
