// $(document).ready(function {

// // Paw Scroll to top-of-page
// 	$('#top, #down').on('click', function(e){
//     e.preventDefault();
//     var target= $(this).get(0).id == 'top' ? $('#down') : $('#top');
//     $('html, body').stop().animate({
//        scrollTop: target.offset().top
//     }, 1000);
// 	});

// });

// Image Carousel, Vanilla Javascript
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 3 seconds
}