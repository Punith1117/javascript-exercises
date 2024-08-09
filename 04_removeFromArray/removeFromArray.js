const removeFromArray = function(...arg) {
    let newArray = arg[0]; 
    for (let i = 1; i < arg.length; i++) {
        for (let j = 0; j < newArray.length; j++) {
            if (newArray[j] === arg[i]) {
                newArray.splice(j, 1);
                j--;
            }
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
