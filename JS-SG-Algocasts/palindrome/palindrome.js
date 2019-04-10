function palindrome(str) {
  return str.split("").reduce((prev, curr) => curr + prev, "") === str
    ? true
    : false;
}

module.exports = palindrome;

// function palindrome(str) {
//     return (str === str.split('').reverse().join('')) ? true : false;
// }
