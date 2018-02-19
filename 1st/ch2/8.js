outer(1);

function outer(arg) {
  var local_var = 'foo';

  function inner() {
    console.log('inner');
  }

  inner();
}