// Create click handlers for both celcius and farenheit input options
// Run a calculation conversion when #button is clicked
// Get result and display it below
//// How can I put the answer in the other (C -> F) input box? *INSTEAD* of in a separate answer box?
// Do something pretty nice with css?

// Declare the document ready for jQuery!
$(document).ready(function(){


// Declare function for Celcius calculation
    $("#answer1").click(function() {
    // Store value of Celcius
      var celcius = $('.celcius').val();
// store variable with the calculation
      var celciusConvert = (celcius * (9/5) + 32);
// write that to html in element below: output text
      $('#output-text').html(celciusConvert);
    });
  
// Declare function for Farenheit calculation
    $("#answer2").click(function() {
    // Store value of Celcius
      var farenheit = $('.farenheit').val();
// store variable with the calculation
      var farenheitConvert = (farenheit - 32)  *  (5/9);
// write that to html in element below: output text
      $('#output-text').html(farenheitConvert);
    }); 
  
  
});