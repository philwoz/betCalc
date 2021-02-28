// calculates accumalative odds of an array of numbers to 2 d.p
const accumOdds = (odds) => {
    const accum = (accumalator, currentValue) => accumalator * currentValue;
    return odds.reduce(accum);
}
// calculates accumalative each way odds of two array of numbers to 2 d.p odds[] & ewTerms[1.25, 1.5, 1.2]
const ewAccumOdds = (odds, ewTerms) => {
    let ewOdds = [];
    for (let i = 0; i < odds.length; i++) {
        ewOdds[i] = ((odds[i] - 1) * (ewTerms[i] - 1)) + 1;
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
const singles = (unitStake, odds, ewTerms) =>{
    let total = [odds.length, 0, 0, odds]
    for(let i = 0; i < odds.length; i++){
        total[1] = total[1] + (unitStake * odds[i])
        total[2] = total[2] + ((odds[i] - 1) * (ewTerms[i] - 1)) + 1;
    }
    return total

}

const doubles = (unitStake, odds, ewTerms) => {
    let total = [0, 0, 0, []]
    for (let i = 0; i < odds.length - 1; i++)
        for (let j = i + 1; j < odds.length; j++) {
            odds2 = [odds[i], odds[j]]
            total[0]++
            total[3].push(odds2)
            total[2] += calcEwReturns(unitStake, odds2, ewTerms)
            total[1] += calcReturns(unitStake, odds2)
        }
    return total
}
const trebles = (unitStake, odds, ewTerms) => {
    let total = [0, 0, 0, []]
    for (let i = 0; i < odds.length - 2; i++)
        for (let j = i + 1; j < odds.length - 1; j++)
            for (let k = j + 1; k < odds.length; k++) {
                odds2 = [odds[i], odds[j], odds[k]]
                total[0]++
                total[3].push(odds2)
                total[2] += calcEwReturns(unitStake, odds2, ewTerms)
                total[1] += calcReturns(unitStake, odds2)
            }
    return total
}
const fourFolds = (unitStake, odds, ewTerms) => {
    let total = [0, 0, 0, []]
    for (let i = 0; i < odds.length - 3; i++)
        for (let j = i + 1; j < odds.length - 2; j++)
            for (let k = j + 1; k < odds.length - 1; k++)
                for (let l = k + 1; l < odds.length; l++) {
                    //fourfolds
                    let odds2 = [odds[i], odds[j], odds[k], odds[l]]
                    total[0]++
                    total[3].push(odds2)
                    total[2] += calcEwReturns(unitStake, odds2, ewTerms)
                    total[1] += calcReturns(unitStake, odds2)
                }

    return total
}

const fiveFolds = (unitStake, odds, ewTerms) => {
    let total = [0, 0, 0, []]
    for (let i = 0; i < odds.length - 4; i++)
        for (let j = i + 1; j < odds.length - 3; j++)
            for (let k = j + 1; k < odds.length - 2; k++)
                for (let l = k + 1; l < odds.length - 1; l++)
                    for (let m = l + 1; m < odds.length; m++) {
                        let odds2 = [odds[i], odds[j], odds[k], odds[l], odds[m]]
                        total[0]++
                        total[3].push(odds2)
                        total[2] += calcEwReturns(unitStake, odds2, ewTerms)
                        total[1] += calcReturns(unitStake, odds2)


                    }
    return total
}

const sixFolds = (unitStake, odds, ewTerms) => {
    let total = [0, 0, 0, []]
    for (let i = 0; i < odds.length - 5; i++)
        for (let j = i + 1; j < odds.length - 4; j++)
            for (let k = j + 1; k < odds.length - 3; k++)
                for (let l = k + 1; l < odds.length - 2; l++)
                    for (let m = l + 1; m < odds.length - 1; m++)
                        for (let n = m + 1; n < odds.length; n++) {
                            let odds2 = [odds[i], odds[j], odds[k], odds[l], odds[m], odds[n]]
                            total[0]++
                            total[3].push(odds2)
                            total[2] += calcEwReturns(unitStake, odds2, ewTerms)
                            total[1] += calcReturns(unitStake, odds2)

                        }
    return total
}

const sevenFolds = (unitStake, odds, ewTerms) => {
    let total = [0, 0, 0, []]
    for (let i = 0; i < odds.length - 6; i++)
        for (let j = i + 1; j < odds.length - 5; j++)
            for (let k = j + 1; k < odds.length - 4; k++)
                for (let l = k + 1; l < odds.length - 3; l++)
                    for (let m = l + 1; m < odds.length - 2; m++)
                        for (let n = m + 1; n < odds.length - 1; n++)
                            for (let p = n + 1; p < odds.length; p++) {
                                let odds2 = [odds[i], odds[j], odds[k], odds[l], odds[m], odds[n], odds[p]]
                                total[0]++
                                total[3].push(odds2)
                                total[2] += calcEwReturns(unitStake, odds2, ewTerms)
                                total[1] += calcReturns(unitStake, odds2)
                            }
    return total
}

const eightFolds = (unitStake, odds, ewTerms) => {
    let total = [0, 0, 0, []]
    for (let i = 0; i < odds.length - 7; i++)
        for (let j = i + 1; j < odds.length - 6; j++)
            for (let k = j + 1; k < odds.length - 5; k++)
                for (let l = k + 1; l < odds.length - 4; l++)
                    for (let m = l + 1; m < odds.length - 3; m++)
                        for (let n = m + 1; n < odds.length - 2; n++)
                            for (let p = n + 1; p < odds.length - 1; p++)
                                for (let q = p + 1; q < odds.length; q++) {
                                    let odds2 = [odds[i], odds[j], odds[k], odds[l], odds[m], odds[n], odds[p], odds[q]]
                                    total[0]++
                                    total[3].push(odds2)
                                    total[2] += calcEwReturns(unitStake, odds2, ewTerms)
                                    total[1] += calcReturns(unitStake, odds2)
                                }

    return total
}

const calcAllCombo = (unitStake, odds, ewTerms, myBool = false) => {
    let total = [unitStake,0,0,0]
    let singlesBets = []

    if(myBool == true){
        singlesBets = singles(unitStake, odds, ewTerms)
        total[3] = singlesBets[0]
        total[1] = singlesBets[1]
        total[2] = singlesBets[2]
        
    }

    const arrayTwo = doubles(unitStake, odds, ewTerms)
    const arrayThree = trebles(unitStake, odds, ewTerms)
    const arrayFour = fourFolds(unitStake, odds, ewTerms)
    const arrayFive = fiveFolds(unitStake, odds, ewTerms)
    const arraySix = sixFolds(unitStake, odds, ewTerms)
    const arraySeven = sevenFolds(unitStake, odds, ewTerms)
    const arrayEight = eightFolds(unitStake, odds, ewTerms)
    total[1] = total[1] + (arrayTwo[1] + arrayThree[1] + arrayFour[1] + arrayFive[1] + arraySix[1] + arraySeven[1] + arrayEight[1])
    total[2] = total[2] + (arrayEight[2] + arrayTwo[2] + arrayThree[2] + arrayFour[2] + arrayFive[2] + arraySix[2] + arraySeven[2])
    total[3] = total[0] * (arrayEight[0] + arrayTwo[0] + arrayThree[0] + arrayFour[0] + arrayFive[0] + arraySix[0] + arraySeven[0])
    console.log(total[1])
    

    return total
}

// let array = [sevenFolds(1, [6, 2, 3, 4, 5, 7, 8, 9], [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2])]
// console.log(array[0])
calcAllCombo(2.55, [6, 2, 3, 4, 5, 7], [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2], true)
// console.log()) , [1.25, 1.25, 1.25, 1.25, 1.25]