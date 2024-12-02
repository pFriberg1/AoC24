let inp = require("fs").readFileSync("d2-inp.txt", "utf8");
let lines = inp.split("\r\n").map(String);

let numArray = lines.map((line) => line.split(" ").map(Number));
let result = 0;

for (let i = 0; i < numArray.length; i++) {
  let cmp = numArray[i][0];
  let isDescending = false;
  let isAscending = false;
  for (let j = 1; j < numArray[i].length; j++) {
    let diff = cmp - numArray[i][j];
    if (1 <= diff && diff <= 3) {
      isDescending = true;
    } else if (-3 <= diff && diff <= -1) {
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
