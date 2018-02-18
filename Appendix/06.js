// [String.prototype.replace() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

var regexp = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(regexp, '$2 $1');
console.log(newstr);
