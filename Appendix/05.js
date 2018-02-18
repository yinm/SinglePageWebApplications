// [String.prototype.replace() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

var regexp = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newStr = str.replace(regexp, 'oranges');
console.log(newStr);