const reverseString = function(string) {
    // split string into array
    const stringArray = string.split("");

    // reverse the array
    const reversedArray = stringArray.reverse();

    // use join method on array to turn back into a string
    const reversedString = reversedArray.join("")
    return reversedString
};

reverseString('testing')
// Do not edit below this line
module.exports = reverseString;
