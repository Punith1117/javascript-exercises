const palindromes = function (str) {
    let cleanStr = str.replace(/[,!. ]/g,'');
    let lowerCaseStr = cleanStr.toLowerCase();
    let strArray = [];
    reverseStrArray = lowerCaseStr.split('').reverse().join('');
    if (lowerCaseStr == reverseStrArray) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
