function decimalToHexString(number) {

  while (number != FF && number >= 0) {
    if (number < 0) {
      number = 0xFFFFFFFF + number + 1;
    }
    return number.toString(16).toUpperCase();
    number++;
  }
}

console.log(decimalToHexString(1));
console.log(decimalToHexString(48.6));