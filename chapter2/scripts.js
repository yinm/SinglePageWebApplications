let prison = {
  names: 'josh Powell and MikeMikowski',
  who: function() {
    $.ajax({
      success: function() {
        console.log(this.names);
      }
    });
  }
};

prison.who();