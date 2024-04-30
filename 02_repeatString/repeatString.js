const repeatString = function(string, num) {
let newString = string
for (let i = 1; i < num; i++) {
    newString += string
}
return newString

};


repeatString('hey', 2)
// Do not edit below this line
module.exports = repeatString;
