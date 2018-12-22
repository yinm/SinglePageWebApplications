var eatFunction = function (what_to_eat) {
  var sentence = 'I am going to eat a ' + what_to_eat
  console.log(sentence)
}
eatFunction('sandwich');

(function(what_to_eat) {
  var sentence = 'I am going to eat a ' + what_to_eat
  console.log(sentence)
})('sandwich')
