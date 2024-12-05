let inp = require("fs").readFileSync("d2-inp.txt", "utf8");
let lines = inp.split("\n").map(String);

let numArray = lines.map((line) => line.split(" ").map(Number));
let result = 0;
for (let i = 0; i < numArray.length; i++) {
    for (let j = 0; j < numArray[i].length; j++) {
        let temp = Array.from(numArray[i]);
        temp.splice(j, 1);
        if (isSafeLine(temp)) {
            result++;
            break;
        }
    }

}
console.log(result);


function isSafeLine(arr) {
    let isIncreasing = null;
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i - 1];
        if ((Math.abs(diff) > 3) || diff === 0) {
            return false;
        }

        if (isIncreasing === null) {
            isIncreasing = diff > 0;
        } else if (isIncreasing !== (diff > 0)) {
            return false;
        }
    }
    return true;
}