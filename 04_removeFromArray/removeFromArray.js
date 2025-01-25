const removeFromArray = function() {
    let array = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
      let arg = arguments[i];
      array = array.filter(item => item !== arg);
  }
return array;
};

// Do not edit below this line
module.exports = removeFromArray;
