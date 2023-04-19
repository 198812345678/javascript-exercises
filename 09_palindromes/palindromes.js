const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const strRev = str.split('').reverse().join("");
    if (str === strRev) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
