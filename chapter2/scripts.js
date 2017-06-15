outer(1);

function outer(arg) {
  let local_var = 'foo';

  function inner() {
    console.log('inner');
  }

  inner();
}
