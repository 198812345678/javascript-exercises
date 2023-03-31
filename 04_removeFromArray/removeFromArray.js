const removeFromArray = function(list, ...args) {
    let result = [];
    list.forEach(element => {
        if(!args.includes(element)) {
            result.push(element);
        }
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
