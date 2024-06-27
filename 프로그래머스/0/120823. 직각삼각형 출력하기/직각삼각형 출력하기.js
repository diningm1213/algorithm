const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    Array(n).fill(0).forEach((_, i) => {
        console.log('*'.repeat(i + 1));
    });
});