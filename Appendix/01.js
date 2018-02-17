// [for...in - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...in)

var string1 = "";
var object1 = {
  a: 1,
  b: 2,
  c: 3,
};

for (var property1 in object1) {
  string1 = string1 + object1[property1];
}

console.log(string1);