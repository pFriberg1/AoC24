let inp = require('fs').readFileSync('d1-inp.txt', 'utf8')
let lines = inp.split('\r\n').map(String);
let left = []
let right = []


lines.forEach(line => {
    let [first, second] = line.split('  ');
    left.push(Number(first.trim()));
    right.push(Number(second.trim()));
});


let result = 0;
for (i = 0; i < left.length; i++) {
    let l = left[i];
    let m = 0;
    for (j = 0; j < right.length; j++) {
        let r = right[j];
        if (l === r) {
            m++;
        }
    }
    result +=l * m;	
}

console.log(result);