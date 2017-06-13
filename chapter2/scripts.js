let proto = {
  sentence  : 4,
  probation : 2
};

let firstPrisoner = Object.create( proto );
firstPrisoner.name = 'Joe';
firstPrisoner.id = '12A';

let secondPrisoner = Object.create( proto );
secondPrisoner.name = 'Sam';
secondPrisoner.id = '2BC';
