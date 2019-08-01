const sortNums = (x, y) => y - x;


const largestOfFour = (arr) => {
  const maxArr = []
  arr.forEach(subArr => maxArr.push(subArr.sort(sortNums)[0]));
  return maxArr;
}

module.exports = largestOfFour;

