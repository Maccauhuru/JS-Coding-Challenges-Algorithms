const findLongestWordLength = str => {
  str = str.split(" ")
  let words = []
  str.forEach(word => words.push(word.length))
  let longest = words[0]
  for (let i = 0; i < words.length; i++) {
    if (words[i] > longest) {
      longest = words[i]
    }
  }
  return longest;
}

module.exports = findLongestWordLength;