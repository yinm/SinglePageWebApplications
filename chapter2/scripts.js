function sendAjaxRequest() {
  const scoped_var = 'yay';

  $.ajax({
    success: function() {
      console.log(scoped_var);
    }
  });
}

sendAjaxRequest();