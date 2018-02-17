// [Object.prototype.hasOwnProperty() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

var o = new Object();
o.prop = 'exists';
console.log(o.hasOwnProperty('prop')); // true

function changePropName(obj, propNamestr, newPropNameStr) {
  obj[newPropNameStr] = obj[propNamestr];
  delete obj[propNamestr];
}

changePropName(o, 'prop', 'newProp');
console.log(o.hasOwnProperty('prop'));  // false
console.log(o.hasOwnProperty('newProp')); // true