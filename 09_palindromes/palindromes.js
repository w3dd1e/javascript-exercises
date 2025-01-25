const palindromes = function (string) {
    let aZ09 = "abcdefghihklmnopqrstuvwxyz0123456789"
    let onlyString =
        string.toLowerCase().split('').filter(character => aZ09.includes(character)).join('');
    return onlyString === onlyString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
