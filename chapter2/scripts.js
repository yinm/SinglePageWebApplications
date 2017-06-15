let prison = (function() {
  const
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
