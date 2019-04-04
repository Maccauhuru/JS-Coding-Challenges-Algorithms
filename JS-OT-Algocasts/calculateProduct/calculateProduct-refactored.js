function calculateProduct(arr) {
  let res = [];
  let mathString = "1*" + arr.toString().replace(/,/g, "*") + "*1";
  console.log(mathString);

  for (let i = 0; i < arr.length; i++) {
    let currentMath = mathString.replace("*" + arr[i] + "*", "*1*");
    console.log(currentMath);

    res.push(eval(currentMath));
  }

  return res;
}
