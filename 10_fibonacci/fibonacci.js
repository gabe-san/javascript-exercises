
const fibonacci = function(number) {
    var fib = [0,1];
    for (let i = 0; i <= number - 2; i++) {  
        // -2 is due to initializing array already with 2 numbers
        fib.push(fib[i] + fib[i+1]);
    }
    return (number < 0) ? "OOPS" : fib[number];
    };


// Do not edit below this line
module.exports = fibonacci;
