var menu;
var outerFunction;
var food = 'cake';

outerFunction = function() {
  var fruit;
  var innerFunction;

  fruit = 'apple';

  innerFunction = function() {
    return {
      food: food,
      fruit: fruit
    };
  };

  return innerFunction;
};

menu = outerFunction();
console.log(menu());
