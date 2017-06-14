let prison = (function() {
  let
    prisoner_name = 'Mike Mikowski',
    jail_term = '20 year term';

  return {
    prisoner: prisoner_name + ' - ' + jail_term,
    sentence: jail_term
  };
})();

console.log(prison.prisoner_name);
console.log(prison.prisoner);
console.log(prison.sentence);

console.log(prison.jail_term);
prison.jail_term = 'Sentence commuted';
console.log(prison.jail_term);
console.log(prison.prisoner);