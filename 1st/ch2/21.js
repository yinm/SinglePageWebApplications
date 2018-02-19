var eatFunction = function(whatToEat) {
  var sentence = 'I am going to eat a ' + whatToEat;
  console.log(sentence);
};
eatFunction('sandwich');

(function(whatToEat) {
  var sentence = 'I am going to eat a ' + whatToEat;
  console.log(sentence);
})('sandwich');