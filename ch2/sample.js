var proto = {
  sentence: 4,
  probation: 2
};

var makePrisoner = function(name, id) {
  var prisoner = Object.create(proto);
  prisoner.name = name;
  prisoner.id = id;

  return prisoner;
}

var firstPrisoner = makePrisoner('Joe', '12A');
var secondPrisoner = makePrisoner('Sam', '2BC');

console.log(firstPrisoner);
console.log(secondPrisoner);
