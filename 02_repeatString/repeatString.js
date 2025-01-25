const repeatString = function(string, num) {
    let response ='';
    if (num<0){
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        response += string;
    }
    return response;
}


// Do not edit below this line
module.exports = repeatString;
