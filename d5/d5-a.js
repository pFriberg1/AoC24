let inp = require("fs").readFileSync("d5-ex.txt", "utf8");

let sections = inp.split("\r\n\r\n").map(String);
let s1 = sections[0].split("\r\n").map(String);
console.log(s1);