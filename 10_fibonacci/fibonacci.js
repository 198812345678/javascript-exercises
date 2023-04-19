const fibonacci = function(index) {
    if(index < 0) {
        return 'OOPS';
    }

    let preOne;
    let preTwo;
    for (let i = 0; i < index; i++) {
        if(preOne != undefined && preTwo != undefined) {
            let temp = preOne;
            preOne = preTwo;
            preTwo = temp + preTwo;
        } else {
            preTwo = 1;
            preOne = 0; //
        }
    }
    
    return preTwo;

};

// Do not edit below this line
module.exports = fibonacci;
