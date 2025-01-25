
//F[n-1] + F[n-2] while n>1
const fibonacci = function(number) {
    let num = +number;
    let fArr = [0,1];
    if (num < 0) {
        return "OOPS"
    }
    else {
        for (let i = 2; i <= num; i++) {
            fArr.push(fArr[i-1]+fArr[i-2]);

        }
        return fArr[num];

    }

};

// Do not edit below this line
module.exports = fibonacci;


