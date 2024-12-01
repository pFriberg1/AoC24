let inp = require('fs').readFileSync('d1-inp.txt', 'utf8')
let lines = inp.split('\r\n').map(String);
let left = []
let right = []


lines.forEach(line => {
    let [first, second] = line.split('  ');
    left.push(Number(first.trim()));
    right.push(Number(second.trim()));
});

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

let result = 0;
for (i = 0; i < left.length; i++) {
    let l = left[i];
    let r = right[i];
    let d = Math.abs(l - r);
    result += d;
}

console.log(result);