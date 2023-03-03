
const reverseString = function(input) {
    let splitInput = input.split("");
    let reverseArr = splitInput.reverse();
    let joinArr = reverseArr.join("");
    return joinArr
};
// "" in .split and .join important for removing commas and maintaing spaces between

//can also do for loop(set i = str.length - 1 , then += str[i]) or recursion.

// Do not edit below this line
module.exports = reverseString;
