function sendAjaxRequest() {
  let scoped_var = 'yay';

  $.ajax({
    success: function() {
      console.log(scoped_var);
    }
  });
}

sendAjaxRequest();