const prison = {
  names: 'Mike Mikowski and Josh Powell',
  who: function() {
    const that = this;
    $.ajax({
      success: function() {
        console.log(that.names);
      }
    });
  }
};

prison.who();