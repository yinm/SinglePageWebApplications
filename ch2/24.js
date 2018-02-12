var prison = (function() {
  var prisonerName = 'Mike Mikowski';
  var jailTerm = '20 year term';

  return {
    prisoner: prisonerName + ' - ' + jailTerm,
    sentence: jailTerm
  };
})();

console.log(prison.jailTerm);
prison.jailTerm = 'Sentence commuted';

console.log(prison.jailTerm);
console.log(prison.prisoner);
