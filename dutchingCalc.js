
const calcProbability = (odds) => {
    let probabilty = [];
    odds.forEach(element => {
        probabilty.push((1/(element)) * 100)
    });
    return probabilty;
}

const calcStake = (stake, odds) => {
    let array = calcProbability(odds);
    let total = (accumalator, currentValue) => accumalator + currentValue;
    total = array.reduce(total);
    let stakeArray = [];
    
    array.forEach(element => {
        stakeArray.push((element/(total)) * stake)
    });
    return stakeArray;
}

const dutchingCalc = (stake, odds) => {
    let probArray = calcProbability(odds);
    let stakeArray = calcStake(stake, odds);
    let total = odds[0] * stakeArray[0];
    let profit = total - stake;
    let myTxt = ` DECIMAL ODDS========STAKE`
    for(let i = 0; i < probArray.length; i++){
        myTxt = myTxt.concat(` \n        ${odds[i]}    ========  £${stakeArray[i].toFixed(2)}`)
    }
    myTxt = myTxt.concat(` \n Stake: £${stake}, Total returns: £${total.toFixed(2)}, Total profit £${profit.toFixed(2)}`);

    return myTxt;

}

console.log(dutchingCalc(10, [12, 18, 15.5, 8.5]));