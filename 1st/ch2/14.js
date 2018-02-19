var proto = {
  sentence: 4,
  probation: 2
};

var makePrisoner = function(name, id) {
  var prisoner = Object.create(proto);
  prisoner.name = name;
  prisoner.id = id;

  return prisoner;
};

var firstPrisoner = makePrisoner('Joe', '12A');
console.log(firstPrisoner);
console.log(firstPrisoner.__proto__);
console.log(firstPrisoner.__proto__.__proto__);
console.log(firstPrisoner.__proto__.__proto__.__proto__);
console.log(firstPrisoner.__proto__.__proto__.__proto__.__proto__);
