let proto = {
  sentence  : 4,
  probation : 2
};

let Prisoner = function (name, id) {
  this.name = name;
  this.id = id;
};

Prisoner.prototype = proto;

let firstPrisoner = new Prisoner('Joe', '12A');
let secondPrisoner = new Prisoner('Sam', '2BC');