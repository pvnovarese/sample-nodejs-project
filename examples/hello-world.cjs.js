const { sum, subtract } = require('../lib/cjs/index');

const a = 4;
const b = 3;

console.log(`${a}+${b}=${sum(a, b)}`);
console.log(`${a}-${b}=${subtract(a, b)}`);
