function myFunction ( arg1, arg2 ) {
  let
    local_var = 'foo',
    a_function = function () {
      console.log('a function');
    };

  function inner () {
    console.log('inner');
  }
}

myFunction( 1, 2 );