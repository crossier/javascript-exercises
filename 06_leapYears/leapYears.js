const leapYears = function(year) {
    let div4 = false;
    let div100 = false;
    let div400 = false;
    let leapYear = false;
    //  check rules for leap years
    if (year%4 ===0) {div4 = true;}
    if (year%100 ===0) {div100 = true;}
    if (year%400 ===0) {div400 = true;}
    // implement rules for leap year
    if (div4 && !div100) {leapYear = true;}
    else if (div4 && div100 && div400) {leapYear = true;} 
    else {leapYear = false;}
    return leapYear

};

leapYears(2000)

// Do not edit below this line
module.exports = leapYears;
