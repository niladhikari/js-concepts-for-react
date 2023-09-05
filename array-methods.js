const add = (a,b) => a + b;
console.log(add(4,5));

const a = [2,4,6,9,6];
const b = [...a];
a.push(12,33);
console.log(a,b);