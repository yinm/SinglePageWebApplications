function timeoutRequest() {
  var scopedVar = 'yay';

  setTimeout(function() {
    console.log(scopedVar);
  }, 1000);
}

timeoutRequest();