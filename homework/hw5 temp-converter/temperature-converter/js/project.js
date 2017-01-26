// Create click handlers for both celcius and farenheit input options
// Run a calculation conversion when #button is clicked
// Get result and display it below
//// How can I put the answer in the other (C -> F) input box? *INSTEAD* of in a separate answer box?
// Do something pretty nice with css?

// Declare the document ready for jQuery!
$(document).ready(function(){


// Declare function for Celcius calculation
    // Store value of Celcius
    // store variable with the calculation
    // write that to html in element below: output text

    $("#answer1").click(function() {
      var celcius = $('.celcius').val();
      var celciusConvert = (celcius * (9/5) + 32);
      $('#output-text').html(celciusConvert);

      if (celciusConvert >= 85) {
        $('html').css('background-url', '(../images/pixel-landscape_SUNNY.jpg)');
      } else {
        $('html').css('background-color', 'black');
      }

      // $('background-url', '../images/pixel-landscape_FROZEN.gif' no-repeat center fixed).css(celciusConvert);
    });
  
// Declare function for Farenheit calculation
    // Store value of Farenheit
    // store variable with the calculation
    // write that to html in element below: output text

    $("#answer2").click(function() {
      var farenheit = $('.farenheit').val();
      var farenheitConvert = (farenheit - 32)  *  (5/9);
      $('#output-text').html(farenheitConvert);
    }); 
  
});
