let inp = require("fs").readFileSync("d4-inp.txt", "utf8");
let lines = inp.split("\r\n").map(String);
lines = lines.map(line => line.split(''));
let result = 0;
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] === 'A') {
            try {
                let leftDiagonal = [];
                let rightDiagonal = [];
                
                
                leftDiagonal.push(lines[i-1][j-1]);
                rightDiagonal.push(lines[i-1][j+1]);
                
                leftDiagonal.push(lines[i][j]);
                rightDiagonal.push(lines[i][j]);

                leftDiagonal.push(lines[i+1][j+1]);
                rightDiagonal.push(lines[i+1][j-1]);

                let left = leftDiagonal.toString();
                let right = rightDiagonal.toString();

                if ((left === 'M,A,S' || left === 'S,A,M') && (right === 'M,A,S' || right === 'S,A,M')) {
                    result++; 
                }

            } catch (error) {}
        }    
    }
}
console.log(result);