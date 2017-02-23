$(document).ready(function () {

	$('#animate-me').click(function () {
		$('h1').addClass('animated pulse');
		$('h1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
		console.log('testttt');
	})

})
