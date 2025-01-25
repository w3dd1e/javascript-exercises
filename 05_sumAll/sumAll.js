const sumAll = function (num1, num2) {
    let sum = 0;
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR";
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (Math.floor(num1) !== num1 || Math.floor(num2) !== num2) {
        return "ERROR";
    } else if (num1 > num2) {
        for (let i = num2; i < num1 + 1; i++) {
            sum += i;
        }
        return sum;
    } else {
        for (let i = num1; i < num2 + 1; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
