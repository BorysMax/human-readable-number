module.exports = function toReadable (number) {
  const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const dozens = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const hundred = "hundred"; 

  if (number < 20) return toNineteen(number);

  if (number < 100) return toDozen (number);

  if (number < 1000) {
    const perHundred = number % 100;
    if (perHundred === 0) return toHundred (number);
    if (perHundred < 20) return toHundred (number) + " " + toNineteen(perHundred);
    if (perHundred < 100) return toHundred (number) + " " + toDozen (perHundred);
  }  

  function toNineteen (number) {
    return numbers[number];
  }

  function toDozen (number) {
  const firstNumber = Math.trunc(number/10);
  const secondNumber = number % 10;
  if (secondNumber === 0) return dozens[firstNumber];
  return dozens[firstNumber] + " " + numbers[secondNumber];
  }

  function toHundred (number) { 
    const firstNumber = Math.trunc(number/100);
    return numbers[firstNumber] + " " + hundred;
  }
}
