removeFromArray = function(startingArray, ...removalElement) {
    // make sure removal elements are in an array
    const removalArray = [removalElement].flat();
    const cleanedArray = [];
    outerLoop: for (const i of startingArray) {
        innerLoop: for (const r of removalArray) {
            if (i === r) {
                continue outerLoop;
            }
        }
        cleanedArray.push(i)
    }
    return cleanedArray
};

removeFromArray(['A','b','c',1,2,3],['B','c',2])

removeFromArray([1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray;
