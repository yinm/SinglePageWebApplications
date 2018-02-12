var prison = (function() {
  var prisonerName = 'Mike Mikowski';
  jail_term = '20 year term';

  return {
    prisoner: prisonerName + ' - ' + jail_term,
    sentence: jail_term
  };
})();

console.log(prison.prisoner_name);
console.log(prison.prisoner);
console.log(prison.sentence);