var regular_joe = 'I am here to save the day!';
console.log(regular_joe);

function supermax() {
  console.log(regular_joe);

  function prison() {
    console.log(regular_joe);
  }
  prison();
}
supermax();