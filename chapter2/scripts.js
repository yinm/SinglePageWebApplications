let regular_joe = 'I am global!';

function prison() {
  let prisoner = 'I am local!';
  console.log(prisoner);
}

prison();
console.log( regular_joe );
console.log( prisoner );