let inp = require("fs").readFileSync("d4-inp.txt", "utf8");
let lines = inp.split("\r\n").map(String);
lines = lines.map(line => line.split(''));
let result = 0;
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] === 'A') {
            let ld = [lines[i-1]?.[j-1], lines[i+1]?.[j+1]].toString();
            let rd = [lines[i-1]?.[j+1], lines[i+1]?.[j-1]].toString();

            if ((ld === 'M,S' || ld === 'S,M') && (rd === 'M,S' || rd === 'S,M')) {
                result++; 
            }
        }    
    }
}
console.log(result);