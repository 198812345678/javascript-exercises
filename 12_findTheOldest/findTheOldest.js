const findTheOldest = function(peoples) {
    const result = peoples.reduce((oldest, current) => {
        const currentAge = current.yearOfDeath ? current.yearOfDeath - current.yearOfBirth :  new Date().getFullYear() - current.yearOfBirth;

        let oldestAage;
        if(oldest) {
            oldestAage = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth;
        }

        if (!oldest) {
            return current;
        } else if (currentAge > oldestAage) {
            return current;
        } else {
            return oldest;
        }
        
    }, null);

    return result;
};

// Do not edit below this line
module.exports = findTheOldest;