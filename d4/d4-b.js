let inp = require("fs").readFileSync("d4-inp.txt", "utf8");
let lines = inp.split("\r\n").map(String);
lines = lines.map(line => line.split(''));
let result = 0;
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] === 'A') {
            let leftDiagonal = [lines[i-1]?.[j-1], lines[i+1]?.[j+1]];
            let rightDiagonal = [lines[i-1]?.[j+1], lines[i+1]?.[j-1]];

            let left = leftDiagonal.toString();
            let right = rightDiagonal.toString();

            if ((left === 'M,S' || left === 'S,M') && (right === 'M,S' || right === 'S,M')) {
                result++; 
            }
        }    
    }
}
console.log(result);