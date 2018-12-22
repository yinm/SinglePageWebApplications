var prison = {
  names: 'Mike Mikowski and Josh Powell',
  who: function() {
    var that = this
    setTimeout(function() {
      console.log(that.names)
    }, 1000)
  }
}

prison.who()
