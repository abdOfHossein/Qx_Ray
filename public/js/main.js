$(document).ready(function (e) {
  setTimeout(() => {
    let successMsg = $('#successMsg');
    let field1Err = $('#field1Err');
    let field2Err = $('#field2Err');
    let field3Err = $('#field3Err');
    let field4Err = $('#field4Err');
    console.log(successMsg, field1Err, field2Err, field3Err, field4Err);
    if (
      successMsg.html() ||
      field1Err.html() ||
      field2Err.html() ||
      field3Err.html() ||
      field4Err.html()
    ) {
      successMsg.html(null);
      field1Err.html(null);
      field2Err.html(null);
      field3Err.html(null);
      field4Err.html(null);
    }
  }, 3000);
});
