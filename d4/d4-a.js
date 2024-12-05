let inp = require("fs").readFileSync("d4-inp.txt", "utf8");
let lines = inp.split("\r\n").map(String);
lines = lines.map(line => line.split(''));
let result = 0;
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] === 'X') {
            try {
                //Check top
                if (lines[i-1][j] === 'M' && lines[i-2][j] === 'A' && lines[i-3][j] === 'S') {
                    result++;
                }
            } catch (error) {}

            try {
                //Check bottom
                if (lines[i+1][j] === 'M' && lines[i+2][j] === 'A' && lines[i+3][j] === 'S') {
                    result++;
                }
            } catch (error) {}

            try {
                //Check left
                if (lines[i][j-1] === 'M' && lines[i][j-2] === 'A' && lines[i][j-3] === 'S') {
                    result++;
                }
            } catch (error) {}


            try {
                //Check right
                if (lines[i][j+1] === 'M' && lines[i][j+2] === 'A' && lines[i][j+3] === 'S') {
                    result++;
                }
            } catch (error) {}


            try {
                //Check top-left
                if (lines[i-1][j-1] === 'M' && lines[i-2][j-2] === 'A' && lines[i-3][j-3] === 'S') {
                    result++;
                }
            } catch (error) {}

            try {
                //Check top-right
                if (lines[i-1][j+1] === 'M' && lines[i-2][j+2] === 'A' && lines[i-3][j+3] === 'S') {
                    result++;
                }
            } catch (error) {}

            try {
                //Check bottom-left
                if (lines[i+1][j-1] === 'M' && lines[i+2][j-2] === 'A' && lines[i+3][j-3] === 'S') {
                    result++;
                }
            } catch (error) {}

            try {
                //Check bottom-right
                if (lines[i+1][j+1] === 'M' && lines[i+2][j+2] === 'A' && lines[i+3][j+3] === 'S') {
                    result++;
                }
            } catch (error) {}
        }    
    }
}
console.log(result);