const sumAll = (a,b) => {
    let finalSum = 0;
    if (a < 0 || b < 0 || Number(a) !== a || Number(b) !==b){
        return "ERROR"
    } else if (a < b) {
        for (let i = a; i <= b; i++)
        finalSum += i;
        return finalSum;
    } else {
        for(let i = b; i <= a; i++)
        finalSum += i;
        return finalSum;
    }
    }



// Do not edit below this line
module.exports = sumAll;
