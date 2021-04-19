const Operations = require('../lib/cjs/index').default;
const { sum, subtract } = Operations;

const a = 4;
const b = 3;

console.log(`${a}+${b}=${sum(a, b)}`);
console.log(`${a}-${b}=${subtract(a, b)}`);
