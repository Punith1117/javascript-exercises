const fibonacci = function(n) {
    let int = parseInt(n);

    if (int < 0) return "OOPS";
    else if (int == 0 || int == 1) {
        return int;
    } else {
        let firstNum = 0;
        let secondNum = 1;
        for (i = 2; i <= n; i++) {
            fibNum = firstNum + secondNum;
            firstNum = secondNum;
            secondNum = fibNum; 
        }
        return fibNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
