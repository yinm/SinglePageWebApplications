let prison = (function() {
  let prisoner = 'Josh Powell';

  return {
    prisoner: function() {
      return prisoner;
    }
  }
})();

console.log(prison.prisoner());