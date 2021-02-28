const unitStake = document.getElementById("unitStake")
const odds = document.getElementById("odds")
const ewTerms = document.getElementById("ewTerms")
const submit = document.getElementById("submit")
const addSelection = document.getElementById("addSelection")
const displayTotals = document.getElementById("displayTotals")

// calculates accumalative odds of an array of numbers to 2 d.p
const accumOdds = (odds) => {
    const accum = (accumalator, currentValue) => accumalator * currentValue;
    return odds.reduce(accum);
}
// calculates accumalative each way odds of two array of numbers to 2 d.p odds[] & ewTerms[1.25, 1.5, 1.2]
const ewAccumOdds = (odds, ewTerms) => {
    let ewOdds = [];
    for(let i = 0; i < odds.length ; i++){
        ewOdds[i] = ((odds[i] - 1 ) * (ewTerms[i] -1 )) + 1;
    }
    const accum = (accumalator, currentValue) => accumalator * currentValue;
    return ewOdds.reduce(accum);
}

const calcReturns = (unitStake, odds) => {
    return unitStake * accumOdds(odds);
}

const calcEwReturns = (unitStake, odds, ewTerms) => {
    return unitStake * ewAccumOdds(odds, ewTerms);
}


const betCalculator = (unitStake, odds, ewTerms) => {
    let winReturn = calcReturns(unitStake, odds);
    let ewReturn = calcEwReturns(unitStake, odds, ewTerms);
    
    let totalReturns = winReturn + ewReturn;
    return ` <br>Win only stake: £${unitStake}</br><br> Win only returns: £${winReturn.toFixed(2)}</br> 
    <br>EachWay total stake: £${unitStake * 2}</br>
    <br> EachWay only returns: £${ewReturn.toFixed(2) - (unitStake * 2)}</br><br>Total returns: £${totalReturns.toFixed(2)}</br>`


//     <br>EachWay only stake: £${unitStake}</br>
// <br> Win only profit: £${winReturn - unitStake}</br>
// <br> EachWay only profit: £${(ewReturn - (unitStake * 2)).toFixed(2)} </br>
{/* <br> EachWay profit: £${(totalReturns - (unitStake * 2)).toFixed(2)}</br> */}
}

let oddsArr = []
let ewArr = []

const list = document.getElementById("list")

addSelection.addEventListener("click", () => {
    let newOdds = document.createElement("li")
    let editButton = document.createElement("button")
    oddsArr.push(odds.value)
    ewArr.push(ewTerms.value)
    newOdds.innerHTML = `Selection ${oddsArr.length} Price: ${odds.value} EW Terms: ${ewTerms.value}  `
    oddsLi.appendChild(newOdds)
    editButton.innerHTML = "edit"
    editLi.appendChild(editButton)
    displayTotals.innerHTML = betCalculator(1,oddsArr, ewArr )
    console.log(oddsArr)
}) 

// addEventListener("click", () => {
//     test.innerHTML = odds.value
//     console.log(oddsArr)
// })

    
    


    

