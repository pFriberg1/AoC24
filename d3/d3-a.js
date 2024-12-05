let inp = require("fs").readFileSync("d3-inp.txt", "utf8");

let result = 0;
let potentialMults = inp.split(")");
potentialMults.forEach(element => {
    element = element.split("mul(");
    if (element.length > 1) {
        let validElement = element.filter(e => (/^\d+,\d+$/.test(e)));
        if (validElement.length === 0) {
            return;
        }
        let numbers = validElement[0].split(",").map(Number);
        result += numbers.reduce((acc, curr) => acc * curr);
    }
});

console.log(result);