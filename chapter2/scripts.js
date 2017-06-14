let
  menu,
  outer_function,
  food = 'cake';

outer_function = function() {
  let
    fruit,
    inner_function;

  fruit = 'apple';

  inner_function = function() {
    return {
      food: food,
      fruit: fruit
    }
  };

  return inner_function;
};

menu = outer_function();
console.log(menu());