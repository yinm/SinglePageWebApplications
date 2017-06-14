let prison = (function() {
  return 'Mike is in prison';
})();

function makePrison() {
  return 'Mike is in prison';
}
let prison2 = makePrison();

console.log(prison);
console.log(prison2);