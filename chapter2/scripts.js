let prison = (function() {
  let
    prisoner_name = 'Mike Mikowski',
    jail_term = '20 year term';

  return {
    prisoner: function() {
      return prisoner_name + ' - ' + jail_term;
    },
    setJailTerm: function(term) {
      jail_term = term;
    }
  };
})();

console.log(prison.prisoner());
prison.setJailTerm('Sentence commuted');
console.log(prison.prisoner());
