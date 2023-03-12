const palindromes = function (inputString) {
    const newString = inputString.toLowerCase().match(/[a-z]/g).join(''); 
    //regex match only lowercase letters and no spaces, punctuation marks, etc.
    console.log(newString)
    return newString === newString.split('').reverse().join('');
    //check if new string is the same as reversed
};
palindromes("A car, a man, a maraca.")

// Do not edit below this line
module.exports = palindromes;
