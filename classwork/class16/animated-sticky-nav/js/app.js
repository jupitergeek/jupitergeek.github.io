$(document).ready(function () {

	$(window).scroll(function() {
		var offset = $(window).scrollTop();

		console.log(offset);

		if (offset > 150) {
			console.log('greaterThan150');
			// $('header').css Kind of Excessive
			$('header').addClass('header-offset')
		} else {
			console.log('lessThan150');
			$('header').removeClass('header-offset');
		}
	})

})
