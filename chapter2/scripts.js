function sendAjaxRequest() {
  const scopedVar = 'yay';

  $.ajax({
    success: function() {
      console.log(scopedVar);
    }
  });
}

sendAjaxRequest();