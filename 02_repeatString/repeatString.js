const repeatString = function(word, noTimes) {
    if ( noTimes >= 0 ) {
        let resultWord = '';
    for (let i = 0; i < noTimes; i++) {
        resultWord += word;
    }
    return resultWord;
    } else {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = repeatString;
