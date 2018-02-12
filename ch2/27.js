var prison = (function() {
  var prisoner = 'Josh Powell';

  return {
    prisoner: function() {
      return prisoner;
    }
  };
})();

console.log(prison.prisoner());