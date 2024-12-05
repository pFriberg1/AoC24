let inp = require("fs").readFileSync("d5-ex.txt", "utf8");

let sections = inp.split("\r\n\r\n").map(String);
let s1 = sections[0].split("\r\n").map(String);
let s2 = sections[1].split("\r\n").map(String);

let instruction = {};

s1.forEach(instr => {
    let splitInstr = instr.split('|').map(Number);
    let isFirst = splitInstr[0] in instruction;
    if (!isFirst) {
        instruction[splitInstr[0]] = [splitInstr[1]]
    } else {
        instruction[splitInstr[0]].push(splitInstr[1])
    }
})

let result = 0;

s2.forEach(page => {
    let isValid = isValidPage(instruction, page);
    if (isValid) {
        console.log('isValid', isValid);
        result += isValid;
    }
})

console.log(result);

function isValidPage(instr, page) {
    let numPage = page.split(',').map(Number);
    let isValid = false;
    console.log(numPage);
    for (let i = 0; i < numPage.length - 1; i++) {
        console.log('numPage[i]', numPage[i]);
        if (!(numPage[i] in instr)){
            continue;
        }
        let validPages = instr[numPage[i]];
        if (validPages.includes(numPage[i+1])) {
            isValid = true;
        } else {
            isValid = false;
            break;
        }
    }
    return isValid ? numPage[Math.floor(numPage.length/2)] : false;
}
