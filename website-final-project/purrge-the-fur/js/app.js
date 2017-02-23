$(document).ready(function {

// Paw Scroll to top-of-page
	$('#top, #down').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'top' ? $('#down') : $('#top');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
	});

});