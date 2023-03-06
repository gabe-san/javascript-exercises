
const removeFromArray = function(arr, ...item) {
    item.forEach((arg) => {
        const index = arr.indexOf(arg);
        if (index > -1)
        arr.splice(index, 1);
});
return arr;
}

//spread syntax expands parameter into an array, which lets you use array forEach

// Do not edit below this line
module.exports = removeFromArray;
