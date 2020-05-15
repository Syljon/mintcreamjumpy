function checkCardNumber(input) {
  const str = input.toString();
  if (isNumberValid(str)) {
    return getValidProvider(str);
  }
  return "Nieprawidłowy";
}

function getValidProvider(input) {
  const isMasterCard =
    str.length === 16 &&
    ["51", "52", "53", "54", "55"].includes(str.slice(0, 2));
  const isVisa =
    (str.length === 13 || str.length === 16) && str.startsWith("4");
  const isAmericanExpress =
    str.length === 15 && ["34", "37"].includes(str.slice(0, 2));
  if (isMasterCard) {
    return "MasterCard";
  } else if (isVisa) {
    return "Visa";
  } else if (isAmericanExpress) {
    return "American Express";
  }
  return "Nieprawidłowy";
}
function isNumberValid(input) {
  if (input.length === 0) return false;
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

module.exports = checkCardNumber;
