var prison = (function() {
  var prisonerName = 'Mike Mikowski';
  var jailTerm = '20 year term';

  return {
    prisoner: function() {
      return prisonerName + ' - ' + jailTerm;
    },
    setJailTerm: function(term) {
      jailTerm = term;
    }
  };
})();

console.log(prison.prisoner());
prison.setJailTerm('Sentence Commuted');
console.log(prison.prisoner());