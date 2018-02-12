var prison = {
  names: 'Josh Powell and Mike Mikowski',
  who: function() {
    setTimeout(function() {
      console.log(this.names);
    }, 1000);
  }
};

prison.who();