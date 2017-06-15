let proto = {
  sentence: 4,
  probation: 2
};

let makePrisoner = function(name, id) {
  let prisoner = Object.create(proto);
  prisoner.name = name;
  prisoner.id = id;

  return prisoner;
};

let firstPrisoner = makePrisoner('Joe', '12A');
let secondPrisoner = makePrisoner('Sam', '2BC');

console.log(firstPrisoner.sentence);
console.log(secondPrisoner.sentence);

proto.sentence = 5;
console.log(firstPrisoner.sentence);
console.log(secondPrisoner.sentence);
