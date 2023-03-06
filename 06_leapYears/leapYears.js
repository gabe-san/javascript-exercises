const leapYears = (year) => {
    let x = year%4
    let y = year%100
    let z = year%400

    if (y === 0 && z === 0) {
        return true;
    } else if (y===0) {
        return false;
    } else if (x === 0) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;
