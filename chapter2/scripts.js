let proto = {
  sentence : 4,
  probation: 2
};

let makePrisoner = function(name, id) {
  let prisoner = Object.create(proto);
  prisoner.name = name;
  prisoner.id = id;
  return prisoner;
};

let firstPrisoner = makePrisoner('Joe', '12A');

console.log(firstPrisoner);
console.log(firstPrisoner.__proto__);
console.log(firstPrisoner.__proto__.__proto__);
console.log(firstPrisoner.__proto__.__proto__.__proto__);
console.log(firstPrisoner.__proto__.__proto__.__proto__.__proto__);