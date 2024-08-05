function isOdd(number) {
  if (number % 2 == 0) {
    return false;
  } else {
    return true;
  }
}
let result = isOdd(3);
console.log(result);

//task3:
function squareOrDouble(number) {
  if (isOdd(number)) {
    return number ** 2;
  } else {
    number * 2;
  }
}
let result2 = squareOrDouble(3);
console.log(result2);
