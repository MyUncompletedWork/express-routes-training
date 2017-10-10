$(document).ready(function(){
  console.log("what?")
  // code in here

  $.ajax({
   method: 'GET',
   url: 'http://localhost:3000/guess',
   success: handleSuccess,
   error: handleError
 });

 function handleSuccess(json) {
   console.log(json)
   $("#high-low-correct").html(json)
 }


 function handleError(xhr, status, errorThrown) {
   console.log('uh oh');
 }

});
