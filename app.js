function checkCardNumber(input) {
  if (isNumberValid(input)) {
    return "";
  }
  return "Nieprawidłowy";
}

function isNumberValid(input) {
  const str = input.toString();
  const numberArray = str.length % 2 ? [...str] : ["0", ...str];

  const even = numberArray
    .filter((item, index) => index % 2 == 0)
    .reduce((prev, curr) => prev + +curr, 0);
  const odd = numberArray
    .filter((itemn, index) => index % 2 == 1)
    .map((s) => (s * 2).toString())
    .reduce(
      (prev, curr) =>
        curr.length == 1
          ? (prev = prev + +curr[0])
          : (prev = prev + +curr[0] + +curr[1]),
      0
    );
  return (even + odd) % 10 === 0;
}

console.log(checkCardNumber(123));
console.log(checkCardNumber(5193080150954111));
module.exports = checkCardNumber;
