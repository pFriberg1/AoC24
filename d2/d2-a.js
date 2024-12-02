let inp = require("fs").readFileSync("d2-inp.txt", "utf8");
let lines = inp.split("\r\n").map(String);

let numArray = lines.map((line) => line.split(" ").map(Number));
let result = 0;

for (let i = 0; i < numArray.length; i++) {
  let cmp = numArray[i][0];
  let isDescending = false;
  let isAscending = false;
  for (let j = 1; j < numArray[i].length; j++) {
    let diff = Math.abs(cmp - numArray[i][j]);
    if ((diff === 1 || diff === 2 || diff === 3) && cmp > numArray[i][j]) {
      isDescending = true;
    } else if (
      (diff === 1 || diff === 2 || diff === 3) &&
      cmp < numArray[i][j]
    ) {
      isAscending = true;
    } else {
      isAscending = false;
      isDescending = false;
      break;
    }
    cmp = numArray[i][j];
  }
  if (isDescending !== isAscending) {
    result++;
    isAscending = false;
    isDescending = false;
  }
}
console.log(result);
