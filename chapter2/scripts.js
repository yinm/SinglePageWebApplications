const prison = {
  names: 'Josh powell and Mike Mikowski',
  who: function() {
    $.ajax({
      success: function() {
        console.log(this.names);
      }
    });
  }
};

prison.who();