const sumAll = function(n1, n2) {
    // only work with non-negative numbers and return error for anything else
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) return "ERROR";
    if (n1 < 0 || n2 < 0) return "ERROR";
    
    
    let summedNumbers = n1 + n2;
    let maxNumber;
    let minNumber;
    if (n1 > n2) {
        maxNumber = n1
        minNumber = n2
    }
    else {
        maxNumber = n2
        minNumber = n1
    }

    for (let i = minNumber+1; i < maxNumber; i++) {
        summedNumbers += i
    }
    return summedNumbers
};

sumAll(1,4)
// Do not edit below this line
module.exports = sumAll;
