let proto = {
  sentence  : 4,
  probation : 2
};

let makePrisoner = function(name, id) {
  let prisoner = Object.create(proto);
  prisoner.name = name;
  prisoner.id = id;

  return prisoner;
};

let firstPrisoner = makePrisoner('Joe', '12A');

console.log(firstPrisoner.sentence);
console.log(firstPrisoner.__proto__.sentence);

firstPrisoner.sentence = 10;
console.log(firstPrisoner.sentence);
console.log(firstPrisoner.__proto__.sentence);

delete firstPrisoner.sentence;
console.log(firstPrisoner.sentence);
console.log(firstPrisoner.__proto__.sentence);
