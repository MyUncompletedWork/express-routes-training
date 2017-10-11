$(document).ready(function(){
  console.log("what?")
  // code in here
$("#guess-number-form").on('submit',function(x){
  x.preventDefault();
  $.ajax({
   method: 'GET',
   url: 'http://localhost:3000/guess',
   data: $('#guess-number-form').serialize(),
   success: handleSuccess,
   error: handleError
 });

 function handleSuccess(json) {
   console.log(json)
   $("#high-low-correct").html(json)
 }


 function handleError(xhr, status, errorThrown) {
   console.log('uh oh');
   console.log(xhr)
   console.log(status)
   console.log(errorThrown)
 }
 })

});
