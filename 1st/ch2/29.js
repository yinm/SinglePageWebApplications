var prison = {
  names: 'Mike Mikowski and Josh Powell',
  who: function() {
    return this.names;
  }
};

console.log(prison.who());