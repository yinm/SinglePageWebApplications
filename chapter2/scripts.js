const makePrison = function(prisoner) {
  return function() {
    return prisoner;
  }
};

const joshPrison = makePrison('Josh Powell');
const mikePrison = makePrison('Mike Mikowski');

console.log(joshPrison());
console.log(mikePrison());
