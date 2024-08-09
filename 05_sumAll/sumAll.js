function getSum(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    } 

    return sum;
}
const sumAll = function(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2) && num1 > 0 && num2 > 0) {
        if (num1 < num2) {
            return getSum(num1, num2);
        } else {
            return getSum(num2, num1);
        }
    } else {
        return 'ERROR';
    }
};


// Do not edit below this line
module.exports = sumAll;
