// Version 1.0
// $(document).ready(function () {

// 	var lights = 'on';

// // Click function on #lightswitch

// // Toggle classes switch-on and switch-off on lightswitch
// // Toggle body a class of lights-off

// $('#lightswitch').click(function() {
// 	console.log('howdy');

// 	if (lights == 'on') {
// 		console.log('lights on');
		
// 		$('#lightswitch').addClass('switch-off');
// 		$('#lightswitch').removeClass('switch-on');

// 		$('body').addClass('lights-off');

// 		lights = 'off';
// 	} else {
// 		console.log('lights off');
// 		$('#lightswitch').addClass('switch-on');
// 		$('#lightswitch').removeClass('switch-off');

// 		$('body').removeClass('lights-off');

// 		lights = 'on';
// 	}

// // Other way to do something - but you must delete some of the other code

// 		// $('#lightswitch').toggleClass('switch-on');
// 		// $('#lightswitch').toggleClass('switch-off');
// 		// $('body').toggleClass('lights-off');

// });

// })


// Version 2.0
$(document).ready(function () {

	var lights = 'on';


	$('#lightswitch').click(function() {

			$('#lightswitch').toggleClass('switch-off');
			$('#lightswitch').toggleClass('switch-on');

		if (lights == 'on') {
			console.log('howdy');

			lights = 'off';
		} else {
			console.log('lights off');

			lights = 'on';
		}

	});


});