const ERR = document.getElementById('err');
const AVG_OUTPUT = document.getElementById('output-avg')

function updateDOM(input, id) {
    const divEl = document.querySelector(id);
    const p = document.createElement('p');
    p.textContent = input;
    divEl.appendChild(p);
}

function trackMPGandCost(miles, gallons, price) {
    const MPG = Number((miles / gallons).toFixed(2));
    const tripCost = Number((gallons * price).toFixed(2));
    return {
        miles: miles,
        gallons: gallons,
        price: price,
        MPG: MPG,
        tripCost: tripCost,
    };
}


function calculateAvg(MY_DATA) {
    AVG_OUTPUT.innerHTML = ''
    const numberOfObj = MY_DATA.length;
    let sumMPG = 0;
    TripCost += obj.tripCost;
    // });
    const sums = MY_DATA.reduce (function(sum, obj){
        return {
          MPG: sum.MPG + obj.MPG,
          tripCost: sum.tripCost + obj.tripCost,
        }    
      },0)
      const avgMPG = Number((sums.MPG / numberOfObj).toFixed(2));
      const avgTripCost = Number((sums.TripCost / numberOfObj).toFixed(2));
    updateDOM(`Average MPG is ${avgMPG}`, '#output-avg');
    updateDOM(`Average trip cost is ${avgTripCost}`, '#output-avg');
}

function isFormValid(miles, gallons, price) {
    const errMsg = [];
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure you input value greater than 0');
    }
    if (price > 1000) {
        errMsg.push('Really? I think this is an error...try again');
    }
    if (errMsg.length > 0) {
        ERR.textContent = errMsg;

    } else {
        return true;
    }
}

export {trackMPGandCost, calculateAvg, updateDOM, isFormValid}