var regular_joe = 'Global variable';

// Browser
console.log(regular_joe);
// console.log(window.regular_joe);
// console.log(regular_joe === window.regular_joe);

// Node.js
console.log(regular_joe);
console.log(global.regular_joe);
console.log(regular_joe === global.regular_joe);