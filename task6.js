var number_test = (function () {
  var is_int = function (n) {
    return Number(n) === n && n % 1 === 0;
  };

  var is_float = function (n) {
    return Number(n) === n && n % 1 !== 0;
  };

  return function (n) {
    if (is_int(n)) {
      return "It is a whole number.";
    }
    if (is_float(n)) {
      return "Number has a decimal place.";
    }
  };
})();

console.log(number_test(25.66)); // has decimal place
console.log(number_test(10)); // whole number
