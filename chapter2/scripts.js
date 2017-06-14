let prison = {
  names: 'Mike Mikowski and Josh Powell',
  who: function() {
    let that = this;
    $.ajax({
      success: function() {
        console.log(that.names);
      }
    });
  }
};

prison.who();