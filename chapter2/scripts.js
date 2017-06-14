let makePrison = function(prisoner) {
  return function() {
    return prisoner;
  }
};

let joshPrison = makePrison('Josh Powell');
let mikePrison = makePrison('Mike Mikowski');

console.log(joshPrison());
console.log(mikePrison());