// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth

// // Annonymous functions
$('#first').click(function () {
	$('#bigimage').attr('src', 'img/1.jpg');
	// console.log(this);
})

$('#second').click(function () {
	$('#bigimage').attr('src', 'img/2.jpg');
})

$('#third').click(function () {
	$('#bigimage').attr('src', 'img/3.jpg');
})

$('#fourth').click(fourthImage);
	// Named function
	function fourthImage() {
		$('#bigimage').attr('src', 'img/4.jpg');
}
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// Try using $(this) method!

$('.thumb').click(function () {
	// console.log('this.attr(this)');
	var image = ($(this).attr('src'));
	$('#bigimage').attr('src', image);
})

// Simplified way to reduce all code - this version works, too!
$('.thumb').click(function (){
$('#bigimage').attr('src', $(this).attr('src'));
});