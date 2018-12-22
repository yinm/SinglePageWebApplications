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

console.log(firstPrisoner.sentence);
console.log(firstPrisoner.__proto__.sentence);
firstPrisoner.sentence = 10;

console.log(firstPrisoner.sentence)

console.log(firstPrisoner.__proto__.sentence);
delete firstPrisoner.sentence

console.log(firstPrisoner.sentence);
console.log(firstPrisoner.__proto__.sentence);
