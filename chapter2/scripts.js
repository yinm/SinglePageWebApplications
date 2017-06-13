let regular_joe = 'I am here to save the day!';
console.log(regular_joe);

function supermax () {
  let regular_joe = 'regular_joe is assigned';
  console.log(regular_joe);

  function prison () {
    let regular_joe;
    console.log(regular_joe);
  }

  prison();
}

supermax();