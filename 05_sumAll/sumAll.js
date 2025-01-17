const sumAll = function(num1, num2) {
    if(!(typeof num1 === 'number') 
        || !(typeof num2 === 'number')
        || num1 < 0 || num2 < 0){
        return "ERROR";
    }
    let sum = 0;
    for (let index = Math.min(num1, num2); index <= Math.max(num1, num2); index++) {
        sum += index;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
