function palindrome(str) {
  return str
    .split("")
    .every((val, i) => (val === str[str.length - i - 1] ? true : false));
}

module.exports = palindrome;

// function palindrome(str) {
//     return (str === str.split('').reverse().join('')) ? true : false;
// }

// function palindrome(str) {
//   return str.split("").reduce((prev, curr) => curr + prev, "") === str
//     ? true
//     : false;
// }
