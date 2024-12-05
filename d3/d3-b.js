let inp = require("fs").readFileSync("d3-inp.txt", "utf8");

let result = 0;
let potentialMults = inp.split(")");
let isDo = true;
potentialMults.forEach(inp => {
    let doIdx = inp.indexOf("do(");
    let dontIdx = inp.indexOf("don't(");
    let mulIdx = inp.indexOf("mul(");
    if (dontIdx > doIdx && dontIdx > mulIdx) {
        isDo = false;
        return;
    }
    if (doIdx > dontIdx) {
        isDo = true;
    }
    
    if (isDo){
        inp = inp.split("mul(");
        if (inp.length > 1) {
            let validElement = inp.filter(e => (/^\d+,\d+$/.test(e)));
            if (validElement.length === 0) {
                return;
            }
            let numbers = validElement[0].split(",").map(Number);
            result += numbers.reduce((acc, curr) => acc * curr);
        }
    }
})


console.log(result);