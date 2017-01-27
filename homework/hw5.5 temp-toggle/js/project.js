// Create click handlers for C and F input options
// Run a calculation conversion when #button is clicked
// Get result and display it below

// Convert to Farenheit
// if {} >= 85, HOT "pixel-landscape_HOT.gif"
// else if {} <= 30, FROZEN "pixel-landscape_FROZEN.gif"
// else {} "pixel-landscape_SUNNY.gif"

// Convert to Celcius
// if {} >= 30, HOT "pixel-landscape_HOT.gif"
// else if {} <= 0, FROZEN "pixel-landscape_FROZEN.gif"
// else {} "pixel-landscape_SUNNY.gif"

$(document).ready(function(){

	var temperature = 0;
    // var celciusConvert = (celcius * (9/5) + 32);
    // var farenheitConvert = (farenheit - 32)  *  (5/9);

	$('#answer').click(function() {
		console.log('hoaf');
		$('#answer').toggleClass('celciusConvert');
		$('#answer').toggleClass('farenheitConvert');

	if ('fromCelcius' >= 85) {
		console.log('celcius to f');
		$('#output-text').html();
	} else {

	}

	});

});
